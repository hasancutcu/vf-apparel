import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';

const Product = ({ product, addToCartHandler }) => {
  const { id, price, title, image } = product;

  //sending over the product id
  const addToCart = () => {
    addToCartHandler(id);
  }

  return (
    <Card style={{ width: '20rem' }} className='m-3 shadow card-border'>
      <Card.Img className='card-img' variant="top" src={image} />
      <Card.Body>
        <Card.Title className='product-title'>
          <Row >
            <Col xs={9} >{title}</Col>
            <Col xs={3} >{`£${price}`}</Col>
          </Row>
        </Card.Title>
      </Card.Body>
      <ButtonGroup className='mb-3'>
        <Button variant="primary " className='product-button' onClick={addToCart}  >ADD TO CART</Button>
        <Button variant="secondary " className='product-button'>QUICK VIEW</Button>
      </ButtonGroup>
    </Card>
  )
}

export default Product;