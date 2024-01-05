'use client';
import { small_id } from '@/utils/lib';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import('flowbite-react');

const ShirtDetail = ({ shirt, stringId }) => {
  const imageKey = small_id;

  return (
    <div key={stringId} className="p-4">
      <div className="mt-15">{shirt.title}</div>

      <Carousel
        className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-red-500"
        slide={false}
      >
        {shirt.images.map((image) => (
          <Image
            key={imageKey}
            src={image}
            alt={shirt.description}
            width={200}
            height={200}
          />
        ))}
      </Carousel>
      <div>{shirt.description}</div>
      <div>{shirt.sizeGuide}</div>
      <div>{shirt.sizes}</div>
      <div>{shirt.material}</div>
    </div>
  );
};

export default ShirtDetail;
