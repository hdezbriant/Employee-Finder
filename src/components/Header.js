import React from "react";
import {Jumbotron, Container} from "react-bootstrap";
// import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Jumbotron fluid>
      <Container className="text-center text-monospace">
        <h1>Employee Finder</h1>
        <medium className="text-muted">
          Welcome, Big Brother. Who are you looking for today?
        </medium>
      </Container>
    </Jumbotron>
  );
}

export default Header;
