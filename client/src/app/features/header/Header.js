import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Hasan Cutcu</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header