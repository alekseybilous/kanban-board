import { ComponentType } from 'react';
import { auth0 } from '@/lib/auth';

export interface WithAuthProps {
  user?: any;
  isAuthenticated: boolean;
}

export function withAuth<T extends object>(
  Component: ComponentType<T & WithAuthProps>
) {
  return async function AuthWrapper(props: T) {
    const session = await auth0.getSession();

    return (
      <Component
        {...props}
        user={session?.user}
        isAuthenticated={!!session?.user}
      />
    );
  };
}

// For client components that need auth data
export function withAuthClient<T extends object>(
  Component: ComponentType<T & WithAuthProps>
) {
  return function AuthClientWrapper(props: T & WithAuthProps) {
    return <Component {...props} />;
  };
}

// Usage helper for getting auth data in server components
export async function getAuthData() {
  const session = await auth0.getSession();
  return {
    user: session?.user,
    isAuthenticated: !!session?.user,
  };
}
