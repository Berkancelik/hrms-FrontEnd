import React, { useState, useEffect } from "react";
import { Table,Header, Icon } from "semantic-ui-react";
import { Button } from 'antd';
import JobEmployerService from "../../services/EmployerService";

export default function JobemployerList() {
  const [Employer, setEmployers] = useState([]);

  useEffect(() => {
    let jobEmployerService = new EmployerService();
    JobEmployerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list ul" />
        <Header.Content>İş İlanı Listesi</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Web Adresi</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>E-Mail Adres</Table.HeaderCell>            
       
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
                 <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
       
           
              <Table.Cell>
              <Button>
              ReactDOM.render(
        <div className="site-button-ghost-wrapper">
          <Button type="primary" ghost>
           Görünüm
          </Button>        
        </div>,
        mountNode, );     
              </Button>         
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}