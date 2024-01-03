import mongoose from 'mongoose';
const { Schema } = mongoose;

const shirtSchema = new Schema({
  title: { type: String },
  description: { type: String },
  sizeGuide: { type: String },
  colors: { type: Array },
  sizes: { type: Array },
  material: { type: Array },
  price: { type: Number },
  images: { type: Array },
});

const Shirt = mongoose.models.Shirt || mongoose.model('Shirt', shirtSchema);

export default Shirt;
