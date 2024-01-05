import { Hero } from '@/public/assets';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen z-2">
      <div className="h-full w-full md:mt-24 mt-4">
        <Image src={Hero} sizes="10%" priority={true} objectFit="cover" />
      </div>
      <div className="text-center tracking-wide font-thin my-6 mx-12">
        <div className="text-sm mb-8">New in</div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet, Show collabs here maybe?
        </div>
      </div>

      {/* <div class="mb-24 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
        {CollabShirts.map((shirt) => (
          <>
            <div className="w-250 h-250 mx-2 mb-12 inline-block h-60 mb-12">
              <Image src={shirt.images[0]} width={200} height={20}></Image>
            </div>
          </>
        ))}
      </div> */}
    </main>
  );
}
