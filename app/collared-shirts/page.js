import Card from '@/components/Card';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/shirts', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const CollaredShirts = async () => {
  const shirts = await getData();

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
