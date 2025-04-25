import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({
      message: 'Authorization token is required',
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({
        message: 'User not found',
        success: false,
      });
    }

    req.user = user; 
    next(); 
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid or expired token',
      success: false,
    });
  }
};

export default authenticate;
