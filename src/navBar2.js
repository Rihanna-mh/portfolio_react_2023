import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';

function Navbar2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#workexp">Work Experience</Nav.Link>
            <Nav.Link href="#edu">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <NavDropdown title="Others" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#cert">Certificates</NavDropdown.Item>
              <NavDropdown.Item href="#hobbies">Hobbies & Interests</NavDropdown.Item>
              <NavDropdown.Item href="#contactform">Contact Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;