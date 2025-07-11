import { Board } from '@/components/Board';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/providers/QueryProvider';
import { boardService } from '@/services/boards.service';

export default async function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;

  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['board', boardId],
      queryFn: () => boardService.getById(boardId),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Board
        columns={[
          {
            id: '1',
            title: 'TO DO',
            tasks: [
              {
                title: 'Task 1',
                assignee: 'Aleksey Bilous',
                description: 'Task 1 description',
                id: '1',
                priority: 'low',
                dueDate: '01.02.1995',
              },
              {
                title: 'Task 2',
                assignee: 'Aleksey Bilous',
                description: 'Task 2 description',
                id: '2',
                priority: 'medium',
                dueDate: '01.02.1995',
              },
              {
                title: 'Task 3',
                assignee: 'Aleksey Bilous',
                description: 'Task 3 description',
                id: '3',
                priority: 'high',
                dueDate: '01.02.1995',
              },
            ],
            color: '#ff0000',
          },
          {
            id: '2',
            title: 'IN PROGRESS',
            tasks: [
              {
                title: 'Task 1',
                assignee: 'Aleksey Bilous',
                description: 'Task 1 description',
                id: '1',
                priority: 'low',
                dueDate: '01.02.1995',
              },
              {
                title: 'Task 2',
                assignee: 'Aleksey Bilous',
                description: 'Task 2 description',
                id: '2',
                priority: 'medium',
                dueDate: '01.02.1995',
              },
              {
                title: 'Task 3',
                assignee: 'Aleksey Bilous',
                description: 'Task 3 description',
                id: '3',
                priority: 'high',
                dueDate: '01.02.1995',
              },
            ],
            color: '#ff00ff',
          },
          {
            id: '3',
            title: 'DONE',
            tasks: [
              {
                title: 'Task 1',
                assignee: 'Aleksey Bilous',
                description: 'Task 1 description',
                id: '1',
                priority: 'low',
                dueDate: '01.02.1995',
              },
              {
                title: 'Task 2',
                assignee: 'Aleksey Bilous',
                description: 'Task 2 description',
                id: '2',
                priority: 'medium',
                dueDate: '01.02.1995',
              },
              {
                title: 'Task 3',
                assignee: 'Aleksey Bilous',
                description: 'Task 3 description',
                id: '3',
                priority: 'high',
                dueDate: '01.02.1995',
              },
            ],
            color: '#00ff00',
          },
        ]}
      />
    </HydrationBoundary>
  );
}
