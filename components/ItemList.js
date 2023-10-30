'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function ItemList({ data }) {
  const { data } = useSWR('/api/item');

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {/* {data.map((item) => (
        <li key={item._id}>{item.title}</li>
      ))} */}
    </div>
  );
}
