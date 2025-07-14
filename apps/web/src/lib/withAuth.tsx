import { NextRequest, NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth';
import { SessionData } from '@auth0/nextjs-auth0/types';

type AuthenticatedHandler = (
  request: NextRequest,
  context: { session: SessionData }
) => Promise<NextResponse>;

export function withAuth(handler: AuthenticatedHandler) {
  return async (request: NextRequest) => {
    try {
      const session = await auth0.getSession();

      if (!session) {
        return NextResponse.json(
          { error: 'Not authenticated' },
          { status: 401 }
        );
      }

      return await handler(request, { session });
    } catch (error) {
      console.error('Authentication error:', error);
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }
  };
}
