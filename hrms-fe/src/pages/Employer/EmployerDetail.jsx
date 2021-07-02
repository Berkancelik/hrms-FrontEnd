import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as moment from "moment";
import {Container,Segment,Card,Icon,Label,Table,Button,Divider,} from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import UpdateEmployer from "./UpdateEmployer";
export default function EmployerDetail() {
  let { id } = useParams();
  const [employer, setEmployer] = useState({});
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(id).then((result) => setEmployer(result.data.data));

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByEmployerId(id)
      .then((result) => setjobAdvertisements(result.data.data));
  }, [id]);
  return (
    <div>
      <Segment circle="true" style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Card fluid color="orange" key={employer.id}>
            <Card.Content>
              <Card.Header
                textAlign="center"
                style={{
                  fontSize: "2.3em",
                  color: "brown",
                  marginTop: "1em",
                }}
              >
                {employer.companyName}
              </Card.Header>
              <Card.Header> {employer.UpdateEmployer !=null
                        ?  <Label basic color="orange" style={{marginLeft:"45em",fontSize:"0.80em"}}>
                        <Icon name="question" /> Güncelleme için onay bekleniyor.
                      </Label>
                       : <Label basic color="orange" style={{marginLeft:"45em",fontSize:"0.80em"}}>
                       <Icon name="check" /> Bilgileriniz Güncel.
                     </Label>}</Card.Header>
              <Card.Meta>
                <Table
                  verticalAlign="middle"
                  basic="very"
                  style={{ marginTop: "2em" }}
                >
                  <Table.Body  >
                    <Table.Row textAlign="center">
                      <Table.Cell>
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="globe" /> Web Adresi:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                        textAlign="center"
                      >
                        {" "}
                        {employer.webAddress}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="mail" /> Mail Adresi:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                        {employer.email}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="phone" /> Telefon Numarası:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                        {employer.phoneNumber}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="calendar outline" /> Kuruluş Tarihi:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                       {moment(employer.createdDate).format(
                                "DD.MM.yyyy"
                              )}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="key" /> Şifre:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                        {employer.password}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </Card.Meta>
            </Card.Content>
            <Card.Description>
            <UpdateEmployer employer={employer}/>
          
            </Card.Description>

          </Card>

          <Divider />
          <Card fluid color="orange">
            <Card.Header
              textAlign="center"
              style={{
                fontSize: "2em",
                color: "brown",
                marginTop: "1em",
              }}
            >
              Verilen İlanlar
            </Card.Header>
            <Table basic>
              <Table.Header>
                <Table.Row
                  textAlign="center"
                  style={{
                    fontSize: "1.3em",
                    color: "brown",
                  }}
                >
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Şehir</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                  <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
                  <Table.HeaderCell>İlan Durumu</Table.HeaderCell>
                  <Table.HeaderCell>İlan Onay Durumu</Table.HeaderCell>
                  <Table.HeaderCell>Detay</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body textalign="center">
                {jobAdvertisements.map((jobAdvertisement) => (
                  <Table.Row
                   key={jobAdvertisement.id}
                    textAlign="center"
                    style={{
                      fontSize: "1.2em",
                    }}
                  >
                    <Table.Cell>{jobAdvertisement.jobTitle?.jobTitle}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.city?.cityName}</Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.workHour?.workHour}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.workType?.workType}
                    </Table.Cell>
                    <Table.Cell>{jobAdvertisement.openTitleCount}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      {jobAdvertisement.active === false
                        ? "Yayından kaldırıldı."
                        : "Yayında."}
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {jobAdvertisement.confirmStatus === false
                        ? "Personel onayı bekleniyor."
                        : "Onaylandı."}
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        animated
                        as={NavLink}
                        to={`/jobadvertisements/${jobAdvertisement.id}`}
                        basic
                        color="orange"
                        size="large"
                        style={{ marginBottom: "0em" }}
                      >
                        <Button.Content visible>Detaya Git</Button.Content>
                        <Button.Content hidden>
                          <Icon name="arrow right" />
                        </Button.Content>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        </Container>
      </Segment>
    </div>
  );
}