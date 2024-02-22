const authService = require('../service/authService.js');

exports.signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
