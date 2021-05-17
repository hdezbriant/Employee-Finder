import React from "react";
import {Jumbotron, Container} from "react-bootstrap";
import "./headerStyle.css";

function Header() {
  return (
    <Jumbotron fluid className="bg-dark bottomLine">
      <Container className="text-center text-monospace text-white">
        <h1>Employee Finder</h1>
        <h5 className="text-warning">
          Welcome, Big Brother. Who are you looking for today?
        </h5>
      </Container>
    </Jumbotron>
  );
}

export default Header;
