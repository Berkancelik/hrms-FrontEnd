import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobTitleService from "../../../services/jobTitleService";

export default function JobtitleList() {
    const [titles, setTitle] = useState([]);
    useEffect(() => {

      let jobTitleService = new JobTitleService();
      jobTitleService
        .getJobtitle()

        .then((result) => settitle(result.data.data));
    }, []);

    return (
        <div>
          <Header as="h3">
            <Icon name="list ul" />
            <Header.Content>İş Başlıkları Listesi</Header.Content>
          </Header>
          <Table color="blue" key="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
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