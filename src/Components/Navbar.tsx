import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/SW_Logo_Claim_RGB_3000px.png"

const navTextStyle = {
  color: "#1C4248",
  fontSize: "18px",
  fontWeight: "500"
}

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary better-shadow">
      <Container>
      <Navbar.Brand href="#home" className='mx-3'>
            <img
              alt=""
              src={Logo}
              width="240"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="/" style={navTextStyle}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="" style={navTextStyle}>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;