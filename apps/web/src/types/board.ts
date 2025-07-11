// Simple Board Interface
export interface Board {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

// Request/Response Types
export interface CreateBoardRequest {
  title: string;
  description?: string;
}

export interface UpdateBoardRequest {
  title?: string;
  description?: string;
}

export type BoardResponse = Omit<Board, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
