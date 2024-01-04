// Import necessary modules
'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define the ShirtPage component
const ShirtPage = () => {
  const router = useRouter();
  const [shirtDetail, setShirtDetail] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/shirts/${id}`);
      const data = await response.json();

      setShirtDetail(data);
    };

    if (id) fetchPosts();
  }, [id]);

  if (shirtDetail) {
    const { title, _id } = shirtDetail;

    return (
      <>
        <div className="font-thin uppercase items-center justify-between p-40 bg-slate-500 text-4xl">
          HELLO
        </div>
      </>
    );
  }
};
export default ShirtPage;
