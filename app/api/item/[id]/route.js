import Item from '@/db/models/Item';
import dbConnect from '@/db/connect';

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === 'GET') {
    try {
      const item = await Item.findById(id);
      console.log('ITEMS_ID:_________ ', id);
      return response.status(200).json(item);
    } catch (error) {
      return response.status(404).json('Error', error);
    }
  }
}
