import { User, UserDoc } from "@models";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function verifyAuthenticationToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
    
    const user = await User.findById((decodedToken as JwtPayload).userId);

    req.user = user as UserDoc;
    
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

