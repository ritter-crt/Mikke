import Image from 'next/image';
import { Ira_1, Lotti_1 } from '@/public/assets/shirts';
import { shirts } from '@/constants';
import Card from '@/components/Card';

const CollaredShirts = () => {
  return (
    <main>
      <h1 className=" font-thin uppercase items-center justify-between p-24">
        Collared Shirts
      </h1>
      <Card shirts={shirts}></Card>
    </main>
  );
};

export default CollaredShirts;
