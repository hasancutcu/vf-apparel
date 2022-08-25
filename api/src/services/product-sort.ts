import { IProduct } from '../common/product';

/**
 * Sort products by price
 * @param products Products to sort
 * @param desc if true, sort in descending order
 * @returns Sorted products
 */
const sortbyPrice = (products: IProduct[], desc = false): IProduct[] => {
  if (!desc) return products.sort((a, b) => a.price - b.price);
  return products.sort((a, b) => b.price - a.price);
};

/**
 * Sort products by title
 * @param products Products to sort
 * @param desc if true, sort in descending order
 * @returns Sorted products
 */
const sortbyTitle = (products: IProduct[], desc = false): IProduct[] => {
  const strComparison = desc ? -1 : 1;
  return products.sort((a, b) => {
    return a.title > b.title ? strComparison : -strComparison;
  });
};

export { sortbyPrice, sortbyTitle };
