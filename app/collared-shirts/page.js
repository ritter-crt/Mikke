'use client';
import Card from '@/components/Card';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

async function getData() {
  const res = await fetch('http://localhost:3000/api/shirts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const CollaredShirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setShirts(data);
      } catch (error) {
        console.error('Error fetching shirts:', error.message);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  console.log('DATA_____________', shirts);

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
