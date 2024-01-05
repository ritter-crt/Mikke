import { connectToDB } from '@/db/connect';
import Shirt from '@/db/models/Shirt';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await connectToDB();

    const shirts = await Shirt.find().populate('_id');

    return NextResponse.json(shirts);
  } catch (error) {
    return new Response('Failed to fetch all shirts', { status: 500 });
  }
};
