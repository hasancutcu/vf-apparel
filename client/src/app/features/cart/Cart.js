import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart';
import agent from '../../api/agent';
import Card from 'react-bootstrap/Card';
import CartItem from './CartItem';
import './Cart.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const Cart = () => {

  const dispatch = useDispatch();
  const { total, itemCount, items } = useSelector((state) => state.cart);

  const fetchCart = async () => {
    const data = await agent.Cart.getCart();
    dispatch(cartActions.cartReceived(data));
  }

  useEffect(() => { fetchCart() }, []);

  const removeHandler = async (productId) => {
    try {
      const newCart = await agent.Cart.removeFromCart(productId);
      dispatch(cartActions.cartReceived(newCart));
    } catch (error) {
      console.log(error);
    }

  }

  const renderedItems = items.length > 0 ? items.map(item =>
    <CartItem key={item.product.id} item={item} removeHandler={removeHandler} />) : null;


  return (
    <Card style={{ width: '20rem' }} className='mt-3 shadow cart-top card-border'>
      <Card.Header>
        <Card.Title className='cart-title'>CART
          <span className="ms-2 badge rounded-pill base-color">{itemCount}</span>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        {renderedItems}
      </Card.Body>

      <Card.Footer className='mt-5 cart-footer '>
        <Row>
          <Col xs={7} >
            <Row>
              <span className='cart-footer-total'>Total</span>
            </Row>
            <Row>
              <span className='cart-footer-sub' >Inc. £0 in taxes</span>
            </Row>
          </Col>
          <Col xs={5} className='mt-3 pe-1'>
            <p >{`£${total}`}</p>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default Cart