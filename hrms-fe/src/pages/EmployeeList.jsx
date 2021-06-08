import React, { useState, useEffect } from "react";
import { Table,Header, Icon } from "semantic-ui-react";
import JobEmployeeService from "../../services/EmployeeService";

export default function JobEmployeeList() {
  const [Employee, setEmployees] = useState([]);

  useEffect(() => {
    let jobEmployeeService = new EmployeeService();
    JobEmployeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list ul" />
        <Header.Content>Sistem Kullanıcı Listesi</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>isim</Table.HeaderCell>
            <Table.HeaderCell>Soy İsim</Table.HeaderCell>
            <Table.HeaderCell>E-Mail Adres</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>

       
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastname}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>      
           
              <Table.Cell>
              {/* <Button>
              ReactDOM.render(
        <div className="site-button-ghost-wrapper">
          <Button type="primary" ghost>
           Görünüm
          </Button>        
        </div>,
        mountNode, );     
              </Button>          */}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}