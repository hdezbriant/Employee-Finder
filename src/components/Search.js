import React from "react";
import {Form, Container} from "react-bootstrap";

function Search() {
  return (
    <Container className="align-items-center">
      <Form.Row className="justify-content-center">
        <Form.Group controlId="searchField" style={{width: "60%"}}>
          <Form.Label className="text-white">Search by Name:</Form.Label>
          <Form.Control type="text" placeholder="Type name here" className="bg-dark border-warning"/>
        </Form.Group>
      </Form.Row>
    </Container>
  );
}

export default Search;
