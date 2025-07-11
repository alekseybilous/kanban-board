import { request } from '@/lib/request';
import {
  BoardResponse,
  CreateBoardRequest,
  UpdateBoardRequest,
} from '@/types/board';

export const boardService = {
  // Get all boards
  getAll: () => request<BoardResponse[]>('/api/boards'),

  // Get a single board
  getById: (boardId: string) =>
    request<BoardResponse>(`/api/boards/${boardId}`),

  // Create a new board
  create: (data: CreateBoardRequest) =>
    request<BoardResponse>('/api/boards', {
      method: 'POST',
      body: data,
    }),

  // Update a board
  update: (boardId: string, data: UpdateBoardRequest) =>
    request<BoardResponse>(`/api/boards/${boardId}`, {
      method: 'PUT',
      body: data,
    }),

  // Delete a board
  delete: (boardId: string) =>
    request<void>(`/api/boards/${boardId}`, {
      method: 'DELETE',
    }),
};
