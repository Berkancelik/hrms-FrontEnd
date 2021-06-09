import React, { useState, useEffect } from "react";
import { Table,Header, Icon } from "semantic-ui-react";
import EmployeeService from "../services/employeeService";


export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);
  return (
    <div>
    <Header as="h2">
      <Icon name="list alternate outline" />
      <Header.Content>Sistem Kullanıcıları</Header.Content>
    </Header>
    <Table color="violet" key="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>isim</Table.HeaderCell>
            <Table.HeaderCell>Soy İsim</Table.HeaderCell>
            <Table.HeaderCell>E-Mail Adres</Table.HeaderCell>

       
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastname}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>                 
           
            </Table.Row>
          ))}
          </Table.Body>
      </Table>
    </div>
  );
}