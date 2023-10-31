import Image from 'next/image';
import { Ira_1, Lotti_1 } from '@/public/assets/shirts';
import { collaredShirts } from '@/constants';

const CollaredShirts = () => {
  return (
    <main>
      <h1 className=" font-thin uppercase items-center justify-between p-24">
        Collared Shirts
      </h1>
      <div>
        {collaredShirts.map((shirt) => (
          <div>{shirt.title}</div>
        ))}
      </div>
    </main>
  );
};

export default CollaredShirts;
