import React, { useEffect } from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../../store/product';
import { cartActions } from '../../../store/cart';
import agent from '../../api/agent';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import ProductFilter from './ProductFilter';

const ProductGallery = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const sort = useSelector((state) => state.product.sort);


  const fetchProducts = async () => {
    let data;
    if (sort === 'high_price')
      data = await agent.Product.getProductByHighPrice();
    else if (sort === 'low_price')
      data = await agent.Product.getProductByLowestPrice();
    else if (sort === 'title_az')
      data = await agent.Product.getProductByTitleAZ();
    else if (sort === 'title_za')
      data = await agent.Product.getProductByTitleZA();
    dispatch(productActions.productsReceived(data));
  }

  const sortChangeHandler = (event) => {
    dispatch(productActions.sortChanged(event.target.value));
  }

  const addToCartHandler = async (productId) => {
    try {
      const newCart = await agent.Cart.addToCart(productId);

      dispatch(cartActions.cartReceived(newCart));
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => { fetchProducts() }, [sort]);

  const renderedProducts = products.length > 0 ? products.map(product =>
    <Product key={product.id} product={product} addToCartHandler={addToCartHandler} />) : <p>Products not found</p>;

  return (
    <Container className='mt-3 ' >
      <Row className='pb-3'>
        <ProductFilter selected={sort} sortChangeHandler={sortChangeHandler} />
      </Row>
      <Row className='mt-3'>
        {renderedProducts}
      </Row>
    </Container>
  )
}

export default ProductGallery