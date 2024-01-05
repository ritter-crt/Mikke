import { small_id } from '@/utils/lib';
import Image from 'next/image';
import React from 'react';

const ShirtDetail = ({ shirt, stringId }) => {
  const imageKey = small_id;

  return (
    <div key={stringId} className="p-4">
      <div className="mt-14">{shirt.title}</div>
      <div>
        {shirt.images.map((image) => (
          <Image
            key={imageKey}
            src={image}
            alt={shirt.description}
            width={200}
            height={200}
          />
        ))}
      </div>
      <div>{shirt.description}</div>
      <div>{shirt.sizeGuide}</div>
      <div>{shirt.sizes}</div>
      <div>{shirt.material}</div>
    </div>
  );
};

export default ShirtDetail;
