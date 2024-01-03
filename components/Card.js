'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Card = ({ shirts }) => {
  const router = useRouter();
  return (
    <>
      {shirts.map((shirt) => {
        return (
          <div>
            <div
              className="h-60 md:h-96 relative w-full"
              onClick={() => router.push(`/collared-shirts/${shirt.id}`)}
            >
              <Image
                className="-z-10"
                src={shirt.images[0]}
                alt={shirt.description}
                fill={true}
                sizes="10%"
                priority={true}
                objectFit="cover"
              />
            </div>
            <div className="text-center md:flex md:justify-between items-center font-light text-xs md:text-sm mt-4 md:mt-4">
              <div className="my-2">{shirt.title}</div>
              {/* <div>{shirt.price} €</div> */}
            </div>
            <div className="text-center text-xxs font-thin">
              {shirt.material}
            </div>
            {/* <div className="flex justify-center gap-2">
              <div className="h-4 w-4 bg-pink-100"></div>
              <div className="h-4 w-4 bg-blue-400"></div>
            </div> */}
          </div>
        );
      })}
    </>
  );
};

export default Card;
