const AdminUser = require('../models/AdminUser');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find admin user by username
    const adminUser = await AdminUser.findOne({ username });

    // Validate admin user and password
    if (!adminUser || !adminUser.validatePassword(password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate and return an access token
    const accessToken = adminUser.generateAccessToken();
    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
