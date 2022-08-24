import { IProduct } from '../common/product';

//Assumed the variants has the same price
const sortbyPrice = (products: IProduct[], desc = false): IProduct[] => {
  if (!desc) return products.sort((a, b) => a.price - b.price);
  return products.sort((a, b) => b.price - a.price);
};

const sortbyTitle = (products: IProduct[], desc = false): IProduct[] => {
  const strComparison = desc ? -1 : 1;
  return products.sort((a, b) => {
    return a.title > b.title ? strComparison : -strComparison;
  });
};

export { sortbyPrice, sortbyTitle };
