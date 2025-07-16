import { NextResponse } from 'next/server';
import { CreateBoardRequest, BoardResponse } from '@/types/board';
import connectMongoDB from '@/lib/mongodbConnection';
import { BoardModel } from '@/models/boards';

// const boards: BoardResponse[] = [
//   {
//     id: '550e8400-e29b-41d4-a716-446655440001',
//     title: 'Website Redesign Project',
//     description: 'Complete redesign of company website with new branding',
//     userId: 'user-123',
//     createdAt: '2024-01-15T10:30:00.000Z',
//     updatedAt: '2024-01-20T14:45:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440002',
//     title: 'Q1 Marketing Campaign',
//     description: 'Social media and email marketing initiatives for Q1 2024',
//     userId: 'user-123',
//     createdAt: '2024-01-10T09:00:00.000Z',
//     updatedAt: '2024-01-10T09:00:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440003',
//     title: 'Mobile App Development',
//     description: 'iOS and Android app for customer portal',
//     userId: 'user-123',
//     createdAt: '2024-01-05T11:15:00.000Z',
//     updatedAt: '2024-01-18T16:30:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440004',
//     title: 'Personal Tasks',
//     description: 'Track and manage reported bugs from QA and customers',
//     userId: 'user-123',
//     createdAt: '2024-01-20T08:00:00.000Z',
//     updatedAt: '2024-01-20T08:00:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440005',
//     title: 'Bug Tracking',
//     description: 'Track and manage reported bugs from QA and customers',
//     userId: 'user-123',
//     createdAt: '2023-12-01T10:00:00.000Z',
//     updatedAt: '2024-01-19T13:20:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440006',
//     title: 'Content Calendar',
//     description: 'Blog posts and social media content planning',
//     userId: 'user-123',
//     createdAt: '2024-01-12T14:00:00.000Z',
//     updatedAt: '2024-01-12T14:00:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440007',
//     title: 'Product Roadmap 2024',
//     description: 'Feature planning and timeline for the year',
//     userId: 'user-123',
//     createdAt: '2023-12-15T09:30:00.000Z',
//     updatedAt: '2024-01-08T11:45:00.000Z',
//   },
//   {
//     id: '550e8400-e29b-41d4-a716-446655440008',
//     title: 'Customer Feedback',
//     description: 'Organize and prioritize customer feature requests',
//     userId: 'user-123',
//     createdAt: '2024-01-18T15:00:00.000Z',
//     updatedAt: '2024-01-18T15:00:00.000Z',
//   },
// ];

import { withAuth } from '@/lib/withAuth';

export const GET = withAuth(async () => {
  try {
    await connectMongoDB();

    const boards = await BoardModel.find({}).sort('-createdAt');

    return NextResponse.json(boards);
  } catch (error) {
    console.error('Error fetching boards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch boards' },
      { status: 500 }
    );
  }
});

// POST /api/boards - Create a new board
export const POST = withAuth(async (request) => {
  try {
    const body: CreateBoardRequest = await request.json();

    // Validate required fields
    if (!body.title || body.title.trim() === '') {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    // TODO: Get userId from auth session
    const userId = 'user-123'; // Placeholder

    // TODO: Replace with your database creation
    // Example with Prisma:
    // const board = await prisma.board.create({
    //   data: {
    //     title: body.title,
    //     description: body.description,
    //     userId
    //   }
    // });

    // Placeholder response
    const board: BoardResponse = {
      id: crypto.randomUUID(),
      title: body.title,
      description: body.description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId,
    };

    return NextResponse.json(board, { status: 201 });
  } catch (error) {
    console.error('Error creating board:', error);
    return NextResponse.json(
      { error: 'Failed to create board' },
      { status: 500 }
    );
  }
});
