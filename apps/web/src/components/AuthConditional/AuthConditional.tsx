import { ReactNode } from 'react';
import { auth0 } from '@/lib/auth';

interface AuthConditionalProps {
  authenticated: ReactNode;
  unauthenticated: ReactNode;
}

export async function AuthConditional({
  authenticated,
  unauthenticated,
}: AuthConditionalProps) {
  const data = await auth0.getSession();
  return <>{data?.user ? authenticated : unauthenticated}</>;
}
