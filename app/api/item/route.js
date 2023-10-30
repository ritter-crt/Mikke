import { connectToDB } from '@/db/connect';
import Item from '@/db/models/Item';

export const GET = async (request, response) => {
  await connectToDB();
  if (request.method === 'GET') {
    const items = await Item.find();
    console.log('items', items);
    response.status(200).json(items);
  }
};
