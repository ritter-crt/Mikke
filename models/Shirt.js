import mongoose from 'mongoose';

export const Shirt =
  mongoose.models.Shirt ||
  mongoose.model(
    'Shirt',
    new mongoose.Schema({
      title: { type: String },
      description: { type: String },
      sizeGuide: { type: String },
      colors: { type: Array },
      sizes: { type: Array },
      material: { type: Array },
      price: { type: Number },
      images: { type: Array },
    })
  );
