import React, { useState, useEffect } from "react";
import { Table,Header, Icon } from "semantic-ui-react";
import { Button } from 'antd';

import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdvertisementList() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    JobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
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
          </Table.Row>          
        </Table.Header>

        <Table.Body>
          {advertisements.map((advertisement) => (
            <Table.Row key={advertisement.id}>
              <Table.Cell>{advertisement.jobTitle.jobTitle}</Table.Cell>
              <Table.Cell>{advertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{advertisement.city.name}</Table.Cell>
              <Table.Cell>{advertisement.openPositionCount}</Table.Cell>
              <Table.Cell>{advertisement.deadline}</Table.Cell>
              <Table.Cell>{advertisement.open.toString()}</Table.Cell>
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