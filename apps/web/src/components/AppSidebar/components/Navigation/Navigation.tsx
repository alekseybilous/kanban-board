'use client';

import { PageLoader } from '@/components/PageLoader';
import Link from 'next/link';
import { MenuItem } from '@/components/AppSidebar/components/MenuItem';
import { useGetBoards } from '@/hooks';
import { useParams } from 'next/navigation';

export const Navigation = () => {
  const { data, isLoading } = useGetBoards();
  const router = useParams();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {data?.map((board) => (
        <MenuItem asChild key={board.id} isActive={router.boardId === board.id}>
          <Link href={`/app/${board.id}`}>{board.title}</Link>
        </MenuItem>
      ))}
    </>
  );
};
