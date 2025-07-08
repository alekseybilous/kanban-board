'use client';

import { ReactNode } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

interface AuthConditionalProps {
  authenticated: ReactNode;
  unauthenticated: ReactNode;
  loading?: ReactNode;
}

export function AuthConditional({
  authenticated,
  unauthenticated,
  loading = null,
}: AuthConditionalProps) {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return loading;
  }

  return <>{user ? authenticated : unauthenticated}</>;
}
