'use client';

import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

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
  const { status } = useSession();

  if (status === 'loading') {
    return loading;
  }

  return <>{status === 'authenticated' ? authenticated : unauthenticated}</>;
}
