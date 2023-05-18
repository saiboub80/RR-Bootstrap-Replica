import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function TopBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
       
          <Navbar.Brand style={{ margin: "5px 0 0 0px" }} href="#home">
            <img src="../instacart.png" alt="instacart" />
          </Navbar.Brand>
          <Container style={{ margin: "5px 0 0 1416px" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#LogIn">Log In</Nav.Link>
              <Button variant="success">Sign Up</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
