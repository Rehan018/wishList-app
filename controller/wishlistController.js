const wishlistService = require('../service/wishlistService.js');

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await wishlistService.getWishlist(req.user.id);
    res.json(wishlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createWishlistItem = async (req, res) => {
  try {
    const wishlistItem = await wishlistService.createWishlistItem(req.user.id, req.body);
    res.json(wishlistItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteWishlistItem = async (req, res) => {
  try {
    await wishlistService.deleteWishlistItem(req.user.id, req.params.id);
    res.json({ message: 'Wishlist item deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
