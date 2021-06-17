import React, { useEffect, useState } from "react";
import JobTitleService from "../services/jobTitleService";
import {  Table, Header ,Button} from "semantic-ui-react";
export default function JobTitleList() {
  const [jobTitles, setJobtitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobtitles(result.data.data));
  });

  return (
    <div>
      <Header as="h2">
        İş Pozisyonları
        <Header.Subheader>
          Aşağıda sistemimizde olan iş pozisyonlarını görmektesiniz
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobTitles.map((jobTitle) => (
            <Table.Row key={jobTitle.id}>
              <Table.Cell>{jobTitle.jobTitle}</Table.Cell>
              <Table.Cell> <Button color='grey'>Details</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}