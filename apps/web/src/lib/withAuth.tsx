import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

type AuthenticatedHandler = (
  request: NextRequest,
  context: { userId: string }
) => Promise<NextResponse>;

export function withAuth(handler: AuthenticatedHandler) {
  return async (request: NextRequest) => {
    try {
      const { userId } = await auth();

      if (!userId) {
        return NextResponse.json(
          { error: 'Not authenticated' },
          { status: 401 }
        );
      }

      return await handler(request, { userId });
    } catch (error) {
      console.error('Authentication error:', error);
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }
  };
}
