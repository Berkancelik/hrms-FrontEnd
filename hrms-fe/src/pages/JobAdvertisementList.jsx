import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Table, Header ,Button} from "semantic-ui-react";
export default function JobAdvertisementList() {
  
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllActiveTrueAndOpenTrueJobAdverts()
      .then((result) => setJobAdvertisements(result.data.data));
  });

  return (
    <div>
      <Header as="h2">
        İş İlanları
        <Header.Subheader>
        Aşağıda sistemimizde olan iş ilanlarını görmektesiniz
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
            <Table.HeaderCell>Maaş Skalası</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>

            <Table.HeaderCell>İş Veren Firma</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisements) => (
            <Table.Row key={jobAdvertisements.id}>
              <Table.Cell>{jobAdvertisements.jobTitle.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvertisements.description}</Table.Cell>
              <Table.Cell>{jobAdvertisements.city.name}</Table.Cell>
              <Table.Cell>
                {jobAdvertisements.salaryMin}-{jobAdvertisements.salaryMax}
              </Table.Cell>
              <Table.Cell>{jobAdvertisements.publishedAt}</Table.Cell>

              <Table.Cell>{jobAdvertisements.employer.companyName}</Table.Cell>
              <Table.Cell> <Button color='grey'>Details</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}