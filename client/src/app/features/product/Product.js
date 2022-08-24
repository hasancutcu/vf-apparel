import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ product }) => {
  const { id, title, image } = product;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Product number {id}

        </Card.Text>
        <Button variant="primary">ADD TO CART</Button>
        <Button variant="outline-primary">QUICK VIEW</Button>
      </Card.Body>
    </Card>
  )
}

export default Product;