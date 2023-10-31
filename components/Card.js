'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Card = ({ shirts }) => {
  const router = useRouter();
  return (
    <div>
      {shirts.map((shirt) => {
        return (
          <div>
            <Image
              onClick={() => router.push(`/collared-shirts/${shirt._id}`)}
              src={shirt.images[0]}
              width={300}
              height={300}
              priority={true}
              alt={shirt.description}
            />
            <p>{shirt.title}</p>
            <div>
              <p>{shirt.title}</p>
              <p>{shirt.price} €</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
