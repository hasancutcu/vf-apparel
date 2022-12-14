import { Request, Response, NextFunction } from 'express';
import { generateCartId } from '../services/cart';
import fs from 'fs';
import { ICart } from '../common/cart';

/**
 * Middleware that checks if there is a cart in the session.
 * If no session found or session does not include cart id, create a new cart and add it to session.
 *
 * @param req request object
 * @param res response object
 * @param next next function
 */
export const requireCart = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //if no cart id is provided, generate one
    if (!req.session?.cart_id) {
      const cart_id = generateCartId();
      req.session = {
        cart_id,
      };
      //now write to file this empty cart
      const cartsBuffer: Buffer = fs.readFileSync('carts.json');
      const carts: ICart[] = JSON.parse(cartsBuffer.toString());
      carts.push({
        id: cart_id,
        items: [],
        total_amount: 0,
      });
      fs.writeFileSync('carts.json', JSON.stringify(carts));
    } else {
      //cart id is provided, but might not be in the carts.json file
      const cartsBuffer: Buffer = fs.readFileSync('carts.json');
      const carts: ICart[] = JSON.parse(cartsBuffer.toString());
      const cartIndex = carts.findIndex((c) => c.id === req.session?.cart_id);
      if (cartIndex === -1) {
        carts.push({
          id: req.session?.cart_id,
          items: [],
          total_amount: 0,
        });
        fs.writeFileSync('carts.json', JSON.stringify(carts));
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
  next();
};
