import React, { useState, useEffect } from "react";
import { Table,Header, Icon } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
    <Header as="h2">
      <Icon name="list alternate outline" />
      <Header.Content>İş Verenler</Header.Content>
    </Header>
    <Table color="violet" key="violet">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
          <Table.HeaderCell>Website</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {employers.map((employer) => (
          <Table.Row key={employer.id}>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.webAddress}</Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
  );
}