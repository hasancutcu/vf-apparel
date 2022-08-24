import React from 'react'
import Form from 'react-bootstrap/esm/Form'
import './ProductFilter.css';
const ProductFilter = ({ selected, sortChangeHandler }) => {
  return (
    <>
      <Form className='filter'>
        <Form.Select value={selected} onChange={e => sortChangeHandler(e)}>
          <option value={'high_price'}>Highest select</option>
          <option value={'low_price'}>Lowest price</option>
          <option value={'title_az'}>Product Name A to Z</option>
          <option value={'title_za'}>Product Name Z to A</option>
        </Form.Select>
      </Form>

    </>
  )
}

export default ProductFilter