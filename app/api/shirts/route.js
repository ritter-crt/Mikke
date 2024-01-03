import { connectToDB } from '@/utils/connect';
import Shirt from '@/models/Shirt';

export const GET = async (request) => {
  try {
    await connectToDB();

    const shirts = await Shirt.find();

    return new Response(JSON.stringify(shirts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all shirts', { status: 500 });
  }
};
