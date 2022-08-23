import { Request, Response, NextFunction } from 'express';
import { ICart } from '../common/cart';
import { generateCartId } from '../services/cart';

export const requireCart = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //if nor cart id is provided, generate one
  if (!req.session?.cart_id) {
    const cart_id = generateCartId();
    req.session = {
      cart_id,
    };
  }
  next();
};
