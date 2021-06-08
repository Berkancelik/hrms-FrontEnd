import React, { useState, useEffect } from "react";
import { Table,Header, Icon } from "semantic-ui-react";
import { Button } from 'antd';
import JobCandidateService from "../../services/JobCandidateService";

export default function JobCandidateList() {
  const [candidate, setCandidates] = useState([]);

  useEffect(() => {
    let jobCandidateService = new CandidateService();
    JobCandidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
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
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soyisim</Table.HeaderCell>
            <Table.HeaderCell>E-Mail Adres</Table.HeaderCell>   
       
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.jobTitle.jobTitle}</Table.Cell>
              <Table.Cell>{candidate.employer.companyName}</Table.Cell>
              <Table.Cell>{candidate.city.name}</Table.Cell>
           
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