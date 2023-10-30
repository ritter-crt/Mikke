'use client';
import dbConnect from '@/db/connect';
import Item from '@/db/models/Item';

const CollaredShirts = ({ items }) => {
  return (
    <main className="flex min-h-screen flex-col font-thin uppercase items-center justify-between p-24">
      <h1>Collared Shirts</h1>
    </main>
  );
};

// export async function getServerSideProps() {
//   await dbConnect();
//   try {
//     const items = await Item.find();
//     console.log(items);
//     return {
//       props: {
//         items: JSON.parse(JSON.stringify(items)),
//       }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }

export default CollaredShirts;
