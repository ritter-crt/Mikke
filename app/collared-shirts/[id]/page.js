import { connectToDB } from '@/db/connect';
import Shirt from '@/db/models/Shirt';
import ShirtDetail from '@/components/ShirtDetail';

const DetailPage = async ({ params }) => {
  connectToDB();
  const shirt = await Shirt.findById(params.id);
  const stringId = shirt._id.toString();
  return <ShirtDetail shirt={shirt} stringId={stringId} />;
};

export default DetailPage;
