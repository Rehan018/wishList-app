const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const WishlistItem = mongoose.model('WishlistItem', wishlistItemSchema);
module.exports = WishlistItem;
