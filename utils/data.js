import Shirt from '@/models/Shirt';

export const getShirts = async () => {
  try {
    connectToDB();
    const shirts = await Shirt.find();
    return shirts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch shirts!');
  }
};

export const getShirt = async (id) => {
  try {
    connectToDB();
    const shirt = await Shirt.findbyId({ id });
    return shirt;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch shirt!');
  }
};
