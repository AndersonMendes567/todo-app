import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

export default function Header() {

  return (
    <Navbar bg="light" data-bs-theme="light" className="mb-3">
      <Container>
        <Navbar.Brand href="#/">
          <h1 className="fs-4 mb-0 fw-normal">
            <FontAwesomeIcon icon={faTasks} className="me-3" />
            Todo App
          </h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#/">Início</Nav.Link>
          <Nav.Link href="#/about">Sobre</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}