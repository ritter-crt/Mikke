import Image from 'next/image';
import { Ira_1, Lotti_1 } from '@/public/assets/collared-shirts';
import { shirts } from '@/constants';
import Card from '@/components/Card';
import { Shirt } from '@/models/Shirt';

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/shirts', {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export async function getServerSideProps() {
  await connectToDB();
  try {
    const shirts = await Shirt.find();
    // You may perform any server-side data processing here before passing it to the page component.

    return {
      props: {
        shirts: JSON.parse(JSON.stringify(shirts)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

const CollaredShirts =
  ({ shirts }) =>
  () => {
    console.log('DATA_____________', shirts);
    return (
      <main>
        <div className="py-20 px-0 md:py-36 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-10 mx-3 md:mx-4">
            {/* <Card shirts={shirts}></Card> */}
          </div>
        </div>
      </main>
    );
  };

export default CollaredShirts;
