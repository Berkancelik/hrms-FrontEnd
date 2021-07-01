import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Button, Table, Header, Icon } from "semantic-ui-react";
import BusinessIcon from "@material-ui/icons/Business";
import DetailsIcon from "@material-ui/icons/Details";
import { toast } from "react-toastify";

export default function ReviewJobAdvertisementDetails() {
  let jobAdvertisementService = new JobAdvertisementService();

  let { id } = useParams();

  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByJobAdvertisementIdAndConfirmFalse(id)
      .then((result) => setjobAdvertisements([result.data.data]));
  }, []);

  const confirm = (id) => {
    jobAdvertisementService
      .confirm(id)
      .then(toast.success("İLAN ONAYLANDI"),history.push("/confirmjobAdvertisement"));
  };

  return (
    <div className="card">
      <Header as="h2" icon textAlign="center">
        <Header.Content>İş İlanı Detayı</Header.Content>
        <DetailsIcon></DetailsIcon>
      </Header>
      {jobAdvertisements.map((jobAdvertisement) => (
        <div>
          <Table color="red" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">ŞİRKET</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <BusinessIcon /> Şirket
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name="map marker alternate" /> Şehir
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
                <Table.Cell>Açık Pozisyon Sayısı</Table.Cell>
                <Table.Cell>{jobAdvertisement.openTitleCount}</Table.Cell>
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
                <Table.Cell>Minimum Maaş Skalası</Table.Cell>
                <Table.Cell>{jobAdvertisement.minSalary} TL</Table.Cell>
                <Table.Cell>Maksimum Maaş Skalası</Table.Cell>
                <Table.Cell>{jobAdvertisement.maxSalary} TL</Table.Cell>
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
                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button
            onClick={() => confirm(jobAdvertisement.id)}
            style={{ marginTop: "5pt" }}
            floated="right"
            inverted
            color="green"
            size="medium"
          >
            ONAYLA
          </Button>
        </div>
      ))}
    </div>
  );
}