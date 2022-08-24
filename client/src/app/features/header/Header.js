import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const Header = () => {
  const { total, itemCount } = useSelector((state) => state.cart);
  return (
    // <Container>
    //   {/* Stack the columns on mobile by making one full-width and the other half-width */}
    //   <Row >
    //     <Col xs={12} sm={10} md={10}  >
    //       <span className="logo">
    //         VF-APPAREL<sup>CO</sup>
    //       </span>
    //     </Col>
    //     <Col xs={0} sm={2} md={2} >
    //       <span className='total-price'>{`£${total}`}</span>
    //       <span className="me-auto ms-2 badge rounded-pill base-color">{itemCount}</span>
    //     </Col>
    //   </Row>

    // </Container>


    <Container className='p-1' >
      <Navbar >
        <Navbar.Brand href="/" >
          <span className="logo">
            VF-APPAREL<sup>CO</sup>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className='total-price'>{`£${total}`}</span>
            <span className="header-item-count ms-2 badge rounded-pill base-color">{itemCount}</span>
          </Navbar.Text>
        </Navbar.Collapse>

      </Navbar>
    </Container>

  )
}

export default Header