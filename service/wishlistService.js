const WishlistItem = require('../models/WishlistItem.js');

exports.getWishlist = async (userId) => {
  return await WishlistItem.find({ userId });
};

exports.createWishlistItem = async (userId, wishlistItemData) => {
  return await WishlistItem.create({ ...wishlistItemData, userId });
};

exports.deleteWishlistItem = async (userId, itemId) => {
  await WishlistItem.findOneAndDelete({ _id: itemId, userId });
};
