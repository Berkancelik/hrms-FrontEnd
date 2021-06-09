import React, { useState, useEffect } from "react";
import { Table,Header, Icon,Button} from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getAllcandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list ul" />
        <Header.Content>Sistem Kullanıcıları</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soyisim</Table.HeaderCell>
            <Table.HeaderCell>E-Mail Adres</Table.HeaderCell>   
            <Table.HeaderCell>Detaylar</Table.HeaderCell>

       
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
           
              <Table.Cell>
                <Button color="violet">Göster</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}