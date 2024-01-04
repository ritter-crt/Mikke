import { getShirt } from '@/utils/data';

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/shirts/${id}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;

  const shirt = await getShirt(id);

  return {
    title: shirt.title,
  };
};

const SingleShirtPage = async ({ params }) => {
  const { id } = params;

  // FETCH DATA WITH AN API
  const shirt = await getData(id);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(id);

  try {
    return (
      <>
        <div className="font-thin uppercase items-center justify-between p-40 bg-slate-500 text-4xl">
          <div>{shirt.price}</div>
          <div>{description}</div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default SingleShirtPage;
