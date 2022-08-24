import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart';
import agent from '../../api/agent';
const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  const fetchCart = async () => {
    const data = await agent.Cart.getCart();
    console.log(data);
    dispatch(cartActions.cartReceived(data));
  }

  useEffect(() => { fetchCart() }, []);

  return (
    <div>{cart.total}</div>
  )
}

export default Cart