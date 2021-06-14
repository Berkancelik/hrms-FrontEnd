import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import ConfirmJobAdvertisementModal from "./ConfirmJobAdvertisementModal";

export default function AdminJobPostList() {
  const [jobAdverts, setJobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAll().then((result) => {
      setJobAdvertisements(result.data.data);
    });
  }, []);
    return(
         <section className="scroll-bar overflow-scroll scroll-height">
        <Table celled selectable structured>
          <Table.Header align="center">
            <Table.Row>
              <Table.HeaderCell rowSpan="2"></Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">
                Açık pozisyon sayısı
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Maaş skalası</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Yayınlanma tarihi</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Son başvuru tarihi</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">İstihdam türü</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Uzaktan</Table.HeaderCell>
              <Table.HeaderCell colSpan="2" textAlign="center">
                Durum
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Aktif</Table.HeaderCell>
              <Table.HeaderCell>Onaylanmış</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {jobAdverts.map((jobAdvertisement, i) => (
              <Table.Row key={i}>
                {jobAdvertisement.jobAdvertConfirm ||
                jobAdvertisement.jobAdvertConfirm?.confirmed ? (
                  <Table.Cell>
                    <Button.Group>
                      <Button icon>
                        <Icon name="edit" />
                      </Button>
  
                      <Button color="red" icon>
                        <Icon name="trash" />
                      </Button>
                    </Button.Group>
                  </Table.Cell>
                ) : (
                  <Table.Cell textAlign="center">
                    <ConfirmJobAdvertisementModal
                      triggerButton={
                        <Button icon color="green">
                          <Icon name="checkmark" />
                        </Button>
                      }
                      jobAdvertisement={jobAdvertisement}
                    />
                  </Table.Cell>
                )}
  
                <Table.Cell>{jobAdvertisement.jobTitle.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
                <Table.Cell singleLine>
                  {jobAdvertisement.jobDescription.substring(0, 20)}
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.openTitleCount}</Table.Cell>
                <Table.Cell>
                  {jobAdvertisement.minSalary} ₺ - {jobAdvertisement.maxSalary} ₺
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.publishedAt}</Table.Cell>
                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                <Table.Cell>{jobAdvertisement.workingType?.name}</Table.Cell>
                {jobAdvertisement.isRemote ? (
                  <Table.Cell textAlign="center">
                    <Icon color="green" name="checkmark" size="large" />
                  </Table.Cell>
                ) : (
                  <Table.Cell />
                )}
                {jobAdvertisement.active ? (
                  <Table.Cell textAlign="center">
                    <Icon color="green" name="checkmark" size="large" />
                  </Table.Cell>
                ) : (
                  <Table.Cell />
                )}
                {jobAdvertisement.jobAdverConfirm?.confirmed ? (
                  <Table.Cell textAlign="center">
                    <Icon color="green" name="checkmark" size="large" />
                  </Table.Cell>
                ) : (
                  <Table.Cell />
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    );
}