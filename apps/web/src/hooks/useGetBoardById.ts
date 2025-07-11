import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { BoardResponse } from '@/types/board';
import { RequestError } from '@/errors';
import { boardService } from '@/services/boards.service';

export function useGetBoardById(
  boardId: string,
  options?: Omit<
    UseQueryOptions<BoardResponse, RequestError>,
    'queryKey' | 'queryFn'
  >
) {
  return useQuery({
    queryKey: ['board', boardId],
    queryFn: () => boardService.getById(boardId),
    ...options,
  });
}
