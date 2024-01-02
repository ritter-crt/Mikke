import Image from 'next/image';
import { Ira_1, Lotti_1 } from '@/public/assets/collared-shirts';
import { shirts } from '@/constants';
import Card from '@/components/Card';

const CollaredShirts = () => {
  return (
    <main>
      <div className="py-20 px-0 md:py-36 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-10 mx-3 md:mx-4">
          <Card shirts={shirts}></Card>
        </div>
      </div>
    </main>
  );
};

export default CollaredShirts;
