const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const User = require('../models/User.js');

exports.signup = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('User not found');
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user._id, username: user.username }, config.secretKey);
  return token;
};
