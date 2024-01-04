import Shirt from '@/models/Shirt';
import { connectToDB } from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    connectToDB();

    const shirt = await Shirt.findOne({ id });
    return NextResponse.json(shirt);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch shirt!');
  }
};
