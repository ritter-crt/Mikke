// import { getShirt } from '@/utils/data';

// const getData = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/shirts/${id}`);

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params }) => {
//   const { id } = params;

//   const shirt = await getShirt(id);

//   return {
//     title: shirt.title,
//   };
// };

// // const SingleShirtPage = async ({ params }) => {
// //   const { id } = params;

// const shirt = await getData(id);
// const SingleShirtPage = ({ params }) => {
//   return (
//     <>
//       <div className="font-thin uppercase items-center justify-between p-40 bg-slate-500 text-4xl">
//         <div>{params.id}</div>
//       </div>
//     </>
//   );
// };

async function getShirtById(shirtId) {
  const response = await fetch(`http://localhost:3000/api/shirts/${shirtId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch shirt');
  }

  return response.json();
}

export default async function SingleShirtPage({ params }) {
  const shirt = await getShirtById(params.id);
  return (
    <>
      <div className="font-thin uppercase items-center justify-between p-40">
        <div>{shirt.title}</div>
        <div className="font-thin uppercase items-center justify-between p-40 bg-slate-600">
          {shirt._id}
        </div>
        <div>{shirt.description}</div>
        <div>{shirt.sizeGuide}</div>
      </div>
    </>
  );
}
