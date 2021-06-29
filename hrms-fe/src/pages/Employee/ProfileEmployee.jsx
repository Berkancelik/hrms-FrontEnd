import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../../services/employeeService";
import { Table, Image, Grid, Segment } from "semantic-ui-react";
import UpdateEmployeeModal from "../../modals/employee/update/UpdateEmployeeModal";

export default function Profileemployee() {
  let { id } = useParams();
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getById(id)
      .then((result) => setemployees([result.data.data]));
  });
  return (
    <div className="card">
      {employees.map((employee) => (
        <div>
          <Segment color="green" textAlign="center">
            PROFİL BİLGİLERİ
          </Segment>
          <Grid divided>
            <Grid.Row>
              <Grid.Column width={6}>              
                  
           
              </Grid.Column>
              <Grid.Column width={10}>
                <Table color="green" celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2">
                        KİŞİSEL BİLGİLER
                        <UpdateEmployeeModal
                          id={employee.id}
                          firstName={employee.firstName}
                          lastName={employee.lastName}
                          email={employee.email}
                        ></UpdateEmployeeModal>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Ad</Table.Cell>
                      <Table.Cell>{employee.firstName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Soyad</Table.Cell>
                      <Table.Cell>{employee.lastName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>E-posta Adresi</Table.Cell>
                      <Table.Cell>{employee.email}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      ))}
    </div>
  );
}