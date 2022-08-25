import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

const Header = () => {
  const { total, itemCount } = useSelector((state) => state.cart);
  return (
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