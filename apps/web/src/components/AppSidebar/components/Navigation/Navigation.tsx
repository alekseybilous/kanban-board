'use client';

import { PageLoader } from '@/components/PageLoader';
import Link from 'next/link';
import { MenuItem } from '@/components/AppSidebar/components/MenuItem';
import { useBoards } from '@/hooks';

export const Navigation = () => {
  const { data, isLoading } = useBoards();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {data?.map((board, index) => (
        <MenuItem asChild key={board.id} isActive={index === 1}>
          <Link href="/app">{board.title}</Link>
        </MenuItem>
      ))}
    </>
  );
};
