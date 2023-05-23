import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyAuthenticationToken(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
  console.log(req.header('Authorization'));
  const token = req.header('Authorization')?.split(' ')[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    //TODO extend the Request object to allow that
    // req.user = user;
    next();
  });
}

