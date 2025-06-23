// server/models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, // lost or found
  location: String,
  date: Date,
  contactEmail: String,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model('Item', ItemSchema);
