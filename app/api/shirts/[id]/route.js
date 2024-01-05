import Shirt from '@/db/models/Shirt';
import { connectToDB } from '@/db/connect';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    connectToDB();

    const shirt = await Shirt.findById(id);

    return NextResponse.json(shirt);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch shirt!');
  }
};
