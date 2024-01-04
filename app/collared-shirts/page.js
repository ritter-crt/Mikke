'use client';
import Card from '@/components/Card';
import React, { useEffect, useState, useCallback } from 'react';

async function getData() {
  const res = await fetch('/api/shirts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const CollaredShirts = () => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const data = await getData();
      setShirts(data);
    } catch (error) {
      console.error('Error fetching shirts:', error.message);
      // Display a user-friendly error message to the user
      // e.g., setErrorState('Failed to fetch shirts. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <div className="py-20 px-0 md:py-36 md:px-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-10 mx-3 md:mx-4">
            <Card shirts={shirts}></Card>
          </div>
        )}
      </div>
    </main>
  );
};

export default CollaredShirts;
