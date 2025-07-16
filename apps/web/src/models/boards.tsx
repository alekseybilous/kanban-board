import mongoose, { Schema } from 'mongoose';

interface AddColumnData {
  title: string;
  color?: string;
  position?: number;
  description?: string;
}

// TypeScript interfaces for the Board document
interface IColumn {
  _id?: mongoose.Types.ObjectId;
  title: string;
  color: string;
  position: number;
  description?: string;
  createdAt: Date;
}

interface IBoard extends mongoose.Document {
  title: string;
  description?: string;
  // owner: mongoose.Types.ObjectId;
  columns: mongoose.Types.DocumentArray<IColumn>;
  createdAt: Date;
  updatedAt: Date;

  // Instance methods
  // isOwner(userId: string | mongoose.Types.ObjectId): boolean;
  addColumn(columnData: AddColumnData): Promise<IBoard>;
  reorderColumns(
    columnId: string | mongoose.Types.ObjectId,
    newPosition: number
  ): Promise<IBoard>;
}

// TypeScript interface for the Board model
interface IBoardModel extends mongoose.Model<IBoard> {
  findByUser(userId: string | mongoose.Types.ObjectId): Promise<IBoard[]>;
}

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Board title is required'],
      trim: true,
      maxlength: [100, 'Board title cannot exceed 100 characters'],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Board description cannot exceed 500 characters'],
    },

    // Owner Detection - Root User
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Board must have an owner'],
    //   immutable: true, // Owner cannot be changed after creation
    // },

    // Board Columns
    columns: [
      {
        title: {
          type: String,
          required: [true, 'Column title is required'],
          trim: true,
          maxlength: [50, 'Column title cannot exceed 50 characters'],
        },

        color: {
          type: String,
          default: '#dfe1e6',
          validate: {
            validator: function (v: string) {
              return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v);
            },
            message: 'Invalid color format. Use hex color (e.g., #dfe1e6)',
          },
        },

        position: {
          type: Number,
          required: true,
          min: 0,
        },

        // Optional: Column description
        description: {
          type: String,
          trim: true,
          maxlength: [200, 'Column description cannot exceed 200 characters'],
        },

        // Track column creation
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
// boardSchema.index({ owner: 1, createdAt: -1 });

// Instance method to check if user is board owner
// boardSchema.methods.isOwner = function (userId) {
//   return this.owner.toString() === userId.toString();
// };

// Instance method to add a new column
boardSchema.methods.addColumn = function (columnData: AddColumnData) {
  const position = columnData.position ?? this.columns.length;
  this.columns.push({
    ...columnData,
    position,
    createdAt: new Date(),
  });
  return this.save();
};

// Instance method to reorder columns
boardSchema.methods.reorderColumns = function (
  columnId: string | mongoose.Types.ObjectId,
  newPosition: number
) {
  const column = this.columns.id(columnId);
  if (!column) throw new Error('Column not found');

  const oldPosition = column.position;

  // Update positions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  this.columns.forEach((col: any) => {
    if (col._id.toString() === columnId) {
      col.position = newPosition;
    } else if (
      oldPosition < newPosition &&
      col.position > oldPosition &&
      col.position <= newPosition
    ) {
      col.position--;
    } else if (
      oldPosition > newPosition &&
      col.position < oldPosition &&
      col.position >= newPosition
    ) {
      col.position++;
    }
  });

  return this.save();
};

// Static method to find boards by user (owner only for now)
// boardSchema.statics.findByUser = function (userId) {
//   return this.find({
//     owner: userId,
//   }).sort('-createdAt');
// };

// Pre-save middleware to ensure column positions are sequential
boardSchema.pre('save', function (next) {
  if (this.isModified('columns')) {
    // Sort columns by position and reassign sequential positions
    this.columns.sort((a, b) => a.position - b.position);
    this.columns.forEach((column, index) => {
      column.position = index;
    });
  }
  next();
});

export const BoardModel =
  mongoose.models.Board ||
  mongoose.model<IBoard, IBoardModel>('Board', boardSchema);

export type { IBoardModel, IBoard, IColumn };
