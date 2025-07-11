import { NextRequest, NextResponse } from 'next/server';
import { UpdateBoardRequest, BoardResponse } from '@/types/board';

export async function GET(
  request: NextRequest,
  { params }: { params: { boardId: string } }
) {
  try {
    const { boardId } = params;

    // TODO: Get userId from auth session
    const userId = 'user-123'; // Placeholder

    // TODO: Replace with your database query
    // Example with Prisma:
    // const board = await prisma.board.findFirst({
    //   where: {
    //     id: boardId,
    //     userId // Ensure user owns this board
    //   }
    // });

    // if (!board) {
    //   return NextResponse.json(
    //     { error: 'Board not found' },
    //     { status: 404 }
    //   );
    // }

    // Placeholder response
    const board: BoardResponse = {
      id: boardId,
      title: 'Sample Board',
      description: 'Sample description',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId,
    };

    return NextResponse.json(board);
  } catch (error) {
    console.error('Error fetching board:', error);
    return NextResponse.json(
      { error: 'Failed to fetch board' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { boardId: string } }
) {
  try {
    const { boardId } = params;
    const body: UpdateBoardRequest = await request.json();

    // Validate at least one field is being updated
    if (!body.title && body.description === undefined) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      );
    }

    // TODO: Get userId from auth session
    const userId = 'user-123'; // Placeholder

    // TODO: Replace with your database update
    // Example with Prisma:
    // const board = await prisma.board.update({
    //   where: {
    //     id: boardId,
    //     userId // Ensure user owns this board
    //   },
    //   data: {
    //     title: body.title,
    //     description: body.description,
    //     updatedAt: new Date()
    //   }
    // });

    // Placeholder response
    const board: BoardResponse = {
      id: boardId,
      title: body.title || 'Updated Board',
      description: body.description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId,
    };

    return NextResponse.json(board);
  } catch (error) {
    console.error('Error updating board:', error);
    return NextResponse.json(
      { error: 'Failed to update board' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { boardId: string } }
) {
  try {
    // const { boardId } = params;

    // TODO: Replace with your database deletion
    // Example with Prisma:
    // const deletedBoard = await prisma.board.delete({
    //   where: {
    //     id: boardId,
    //     userId // Ensure user owns this board
    //   }
    // });

    // if (!deletedBoard) {
    //   return NextResponse.json(
    //     { error: 'Board not found' },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json(
      { message: 'Board deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting board:', error);
    return NextResponse.json(
      { error: 'Failed to delete board' },
      { status: 500 }
    );
  }
}
