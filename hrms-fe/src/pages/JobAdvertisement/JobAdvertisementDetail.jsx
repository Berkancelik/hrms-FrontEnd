import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Table, Button, Icon,Segment } from "semantic-ui-react";


export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById(id)
      .then((result) => setJobAdvertisements([result.data.data]));
  }, []);

  return (
    <div className="card">
      {jobAdvertisements.map((jobAdvertisement) => (
        <div>
          <Segment color="green" textAlign="center">
            İLAN DETAYI
          </Segment>
          <Table color="red" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                 
                  ŞİRKET
                  <br />
                  BİLGİLERİ
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Icon name="warehouse" /> Şirket
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="world" />
                  Web Sitesi
                </Table.Cell>
                <Table.Cell>
                  <a
                    target="_blank"
                    href={"https://" + jobAdvertisement.employer.webAddress}
                  >
                    {jobAdvertisement.employer.webAddress}
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name="phone" />
                  Telefon Numarası
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.employer.phoneNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="map marker alternate" />
                  Şehir
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="yellow" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  <Icon name="users" />
                  İŞ
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Pozisyon</Table.Cell>
                <Table.Cell>{jobAdvertisement.jobTitle.jobTitle}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Açık Pozisyon Sayısı</Table.Cell>
                <Table.Cell>{jobAdvertisement.opetTitleCount}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Çalışma Türü</Table.Cell>
                <Table.Cell>{jobAdvertisement.workType.workType}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Çalışma Zamanı</Table.Cell>
                <Table.Cell>{jobAdvertisement.workHour.workHour}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="green" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="money" />
                  MAAŞ
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Minimum Maaş </Table.Cell>
                <Table.Cell positive>{jobAdvertisement.salaryMin} TL</Table.Cell>
                <Table.Cell>Maksimum Maaş </Table.Cell>
                <Table.Cell positive>{jobAdvertisement.salaryMax} TL</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="paperclip" />
                  AÇIKLAMA
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="black">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="time" />
                  Son Başvuru Tarihi
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell negative>{jobAdvertisement.deadline}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      ))}
      <Button style={{ marginTop: "5pt" }} floated="right" color="green">
        BAŞVUR
      </Button>
    </div>
  );
}