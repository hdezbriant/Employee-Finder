import React from "react";
import Form from "react-bootstrap/Form";

function Search() {
  return (
    <Form>
      <Form.Group controlId="searchField">
        <Form.Label>Search by Name:</Form.Label>
        <Form.Control type="text" placeholder="Type name here" />
      </Form.Group>
    </Form>
  );
}

export default Search;
