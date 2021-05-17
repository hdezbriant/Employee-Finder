import React from "react";
import { Table, Container } from "react-bootstrap";

function EmpTable(props) {
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Phone</th>
            <th>E-Mail</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, index) => (
            <tr key={index}>
              <td>
                <img
                  alt="thumbnail"
                  className="img-fluid"
                  src={employee.picture.thumbnail}
                />
              </td>
              <td>{employee.name.last}</td>
              <td>{employee.name.first}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmpTable;
