import React, { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import jobAdvertisementService from "../services/jobAdvertisementService";
export default function JobAdvertisementList() {
  const[jobAdvertisements, setJobAdvertisements] =  useState([]);
  


  useEffect(() => {
    let jobAdvert = new jobAdvertisementService();
    jobAdvert
      .getjobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
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
            <Table.HeaderCell>İş İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son Geçerlilik Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açık</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobTitle.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openTitleCount}</Table.Cell>
              <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.open.toString()}</Table.Cell>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>

              <Table.Cell>
                {/* <Button>
                  ReactDOM.render(
        <div className="site-button-ghost-wrapper">
                    <Button type="primary" ghost>
                      Görünüm
          </Button>
                  </div>
        mountNode, );
              </Button> */}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}