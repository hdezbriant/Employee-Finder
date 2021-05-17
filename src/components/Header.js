import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../styles/headerStyle.css";

function Header() {
  return (
    <Jumbotron fluid className="bg-dark bottomLine">
      <Container className="text-center text-monospace text-white">
        <h1>Employee Finder</h1>
        <h5 className="text-warning">
          Welcome, Big Brother. Who are you looking for today?
        </h5>
        <small>
          Unfortunately, the search feature is currently inoperable. Please try
          again later.
        </small>
      </Container>
    </Jumbotron>
  );
}

export default Header;
