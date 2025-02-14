import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  const tokenValue = token.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorizationMiddleware = (requiredRole) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.json({ message: 'Unauthorized, user not authenticated' });
      }
      if (req.user.role !== requiredRole) {
        return res.status(403).json({ message: 'you do not have Access' });
      } 
      next();
    };
  };
  