import { connectToDB } from '@/db/connect';
import Shirt from '@/db/models/Shirt';

export default async function SingleShirtPage({ params }) {
  connectToDB();
  const shirt = await Shirt.findById(params.id);
  const stringId = shirt._id.toString();
  return (
    <>
      <div
        key={stringId}
        className="font-thin uppercase items-center justify-between p-40"
      >
        <div>{shirt.title}</div>
        <div className="font-thin uppercase items-center justify-between p-40 bg-slate-600">
          {stringId}
        </div>
        <div>{shirt.description}</div>
        <div>{shirt.sizeGuide}</div>
      </div>
    </>
  );
}
