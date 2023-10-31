'use client';
import { shirts } from '@/constants';
import { useRouter } from 'next/navigation';
import React from 'react';

const ShirtPage = () => {
  const router = useRouter();
  const shirtTitle = router.query.id;

  // const shirt = shirts.find((shirt) => shirt.id === shirtTitle);
  // const shirtIdx = shirts.findIndex((shirt) => v._id === shirtTitle);
  return <main></main>;
};

export default ShirtPage;
