import { Shirt } from '@/models/Shirt';
import { connectToDB } from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await connectToDB();
    const data = await Shirt.find();
    console.log(data);
    return NextResponse.json(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    throw new NextResponse('Failed to fetch shirts!');
  }
};
