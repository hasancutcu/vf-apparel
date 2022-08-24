import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import ProductGallery from '../features/product/ProductGallery'
import Cart from '../features/cart/Cart'

const Body = () => {
  return (
    <Container >
      <Row >
        <Col xs={12} sm={10} md={10}  >
          <ProductGallery />
        </Col>
        <Col xs={0} sm={2} md={2} >
          <Cart />
        </Col>
      </Row>
    </Container>
  )
}

export default Body