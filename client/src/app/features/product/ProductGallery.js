import React, { useEffect } from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../../store/product';
import agent from '../../api/agent';

const ProductGallery = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);


  const fetchProducts = async () => {
    const data = await agent.Product.getProductByTitleAZ();
    console.log(data[0].title);
    dispatch(productActions.productsReceived(data));
  }

  useEffect(() => { fetchProducts() }, []);


  return (
    <div>
      {products.map(product =>
        <Product key={product.id} product={product} />
      )}
    </div>
  )
}

export default ProductGallery