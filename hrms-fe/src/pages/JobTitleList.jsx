import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitleList() {
    const [titles, setTitles] = useState([]);
    useEffect(() => {

      let jobTitleService = new JobTitleService()
      jobTitleService.getJobTitles().then((result) => setTitles(result.data.data))}, [])

    return (
      <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>İş Pozisyonları</Header.Content>
      </Header>
      <Table color="violet" key="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonu Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {titles.map((title) => (
                <Table.Row key={title.id}>
                    <Table.Cell>{title.jobTitle}</Table.Cell>
                </Table.Row>
            ))}
      
        </Table.Body>
        </Table>
    </div>
      );
}