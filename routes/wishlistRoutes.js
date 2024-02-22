const express = require('express');
const router = express.Router();
const wishlistController = require('../controller/wishlistController.js');
const { authenticateUser } = require('../middleware/authMiddleware.js');

router.get('/', authenticateUser, wishlistController.getWishlist);
router.post('/', authenticateUser, wishlistController.createWishlistItem);
router.delete('/:id', authenticateUser, wishlistController.deleteWishlistItem);

module.exports = router;
