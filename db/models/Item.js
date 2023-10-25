const itemSchema = new Schema({
  images: { type: Array },
  title: { type: String },
  category: { type: String },
  description: { type: String },
  sizeGuide: { type: String },
  colors: { type: Array },
  sizes: { type: Array },
  price: { type: Number },
});

const Item = mongoose.models.Items || mongoose.model('Items', itemSchema);
export default Item;
