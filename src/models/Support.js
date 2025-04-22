import mongoose from 'mongoose';

const SupportSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Support', SupportSchema);
