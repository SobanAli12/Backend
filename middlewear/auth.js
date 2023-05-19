const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the access token from request headers or cookies
  const token = req.headers.authorization || req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    // Verify and decode the access token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded token payload to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
