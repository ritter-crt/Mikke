import Shirt from '@/models/Shirt';
import { connectToDB } from '@/utils/connect';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    // Assuming params.id is the shirt's ID
    const shirt = await Shirt.findById(params.id).populate('creator');

    if (!shirt) {
      return new Response('Shirt not found', { status: 404 });
    }

    return new Response(JSON.stringify(shirt), { status: 200 });
  } catch (error) {
    console.error('Error fetching shirt details:', error);
    return new Response('Failed to fetch shirt details', { status: 500 });
  }
};
