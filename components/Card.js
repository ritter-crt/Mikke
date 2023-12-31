'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Card = ({ shirts }) => {
  const router = useRouter();

  const [shirtsData, setShirtsData] = useState(shirts);

  useEffect(() => {
    setShirtsData(shirts);
  }, [shirts]);

  return (
    <>
      {shirtsData.map((shirt) => {
        return (
          <div key={shirt._id}>
            <div
              className="h-60 md:h-96 relative w-full"
              onClick={() => router.push(`/collared-shirts/${shirt._id}`)}
            >
              <Image
                className="-z-10"
                src={shirt.images[0]}
                alt={shirt.description}
                fill={true}
                sizes="10%"
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="text-center md:flex md:justify-between items-center font-light text-xs md:text-sm mt-4 md:mt-4">
              <div className="my-2">{shirt.title}</div>
            </div>
            <div className="text-center text-xxs font-thin">
              {shirt.material}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
