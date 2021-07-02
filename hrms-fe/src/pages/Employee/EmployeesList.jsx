import React, { useState, useEffect } from "react";
import {Segment,Container,Label,Table, Icon, Card} from "semantic-ui-react";
import EmployeeService from "../../services/employeeService";
import * as moment from "moment";
import UpdateEmployee from "./UpdateEmployee";

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployee()
      .then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <Segment style={{ padding: "17em 0em" }} vertical>
        <Container>
          {employees.map((employee) => (
            <Card fluid color="blue" key={employee.id}>
              <Card.Content>
                <Card.Meta>
                  <Table
                    verticalAlign="middle"
                    basic="very"
                    style={{ marginTop: "2em" }}
                  >
                    <Table.Body>
                      <Table.Row textAlign="center">
                        <Table.Cell>
                          <Label
                            basic
                            color="blue"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            <Icon name="user" /> Adı:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                          textAlign="center"
                        >
                          {" "}
                          {employee.firstName}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="blue"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            <Icon name="user" /> Soyadı:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                          {employee.lastName}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="blue"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            <Icon name="mail" /> Mail:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                          {employee.email}
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="blue"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            <Icon name="key" /> Şifre:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          {employee.password}
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="blue"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            <Icon name="calendar" /> İşe Başlama Tarihi:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                          {" "}
                          {moment(employee.createdDate).format("DD.MM.yyyy")}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Meta>
              </Card.Content>
              <Card.Description>
                <UpdateEmployee employee={employee} />
              </Card.Description>
            </Card>
          ))}
        </Container>{" "}
      </Segment>
    </div>
  );
}