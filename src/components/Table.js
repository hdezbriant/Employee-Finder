import React from "react";
import { Table, Container } from "react-bootstrap";
// import Moment from "react-moment";

function EmpTable(employee) {
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>E-Mail</th>
            <th>DOB</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
}

export default EmpTable;
