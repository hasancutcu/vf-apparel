import React, { useEffect } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import './CartItem.css';


const CartItem = ({ item, removeHandler }) => {
  const { product, quantity, amount } = item;

  const removeFromCart = () => {
    removeHandler(product.id);
  }
  if (!quantity)
    return null;

  return (
    <Container className='mb-3'>
      <Row>
        <Col xs={8}>
          <Row className='me-1 mb-1'> {product.title} x {quantity}  </Row>
          <Row className='variant-title mb-1'>{product.variant_title}</Row>
        </Col>
        <Col xs={4} >
          <Row className='mb-2'>{`£${amount}`}</Row>
          <Row>
            <Button variant="secondary secondary-color" size="sm" onClick={removeFromCart}>
              REMOVE
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default CartItem