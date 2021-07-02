import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EducationService from "../../services/educationService";
import {
  Segment,
  Container,
  Card,
  Table,
  Label,
  Icon,
  Message,
  Button,
} from "semantic-ui-react";
import * as moment from "moment";
import EducationUpdate from "./EducationUpdate";

export default function EducationList() {
  let { candidateId } = useParams();

  const [educations, setEducations] = useState([]);
  useEffect(() => {
    let educationService = new EducationService();
    educationService
      .getByCandidateId(candidateId)
      .then((result) => setEducations(result.data.data));
  }, [candidateId]);

  return (
    <div>
      <Segment circle="true" vertical>
        <Container>
          <Message color="olive">
            <Message.Header
              textalign="left"
              style={{
                textalign: "left",
                fontSize: "2em",
                color: "purple",
                marginTop: "0.75em",
              }}
            >
              {" "}
              <Icon name="building" color="violet" /> Eğitim Bilgileri{" "}
              <Button
                type="submit"
                floated="right"
                animated
                basic
                color="violet"
                size="large"
                style={{ marginBottom: "1em" }}
              >
                <Button.Content visible>Ekle</Button.Content>
                <Button.Content hidden>
                  <Icon name="check" />
                </Button.Content>
              </Button>
            </Message.Header>
            {educations.map((education) => (
              <Card fluid color="violet" key={education.id}>
                <Card.Content>
                  <Card.Meta>
                    <Table
                      verticalAlign="middle"
                      basic="very"
                      style={{ marginTop: "2em" }}
                    >
                      <Table.Body>
                        <Table.Row textAlign="center">
                          <Table.Cell>
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}
                            >
                              Okul adı:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                            textAlign="center"
                          >
                            {" "}
                            {education.schoolName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row textAlign="center">
                          <Table.Cell>
                            {" "}
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}
                            >
                              Bölüm Adı:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                            {education.departmentName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row textAlign="center">
                          <Table.Cell>
                            {" "}
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}
                            >
                              Başlangıç Tarihi:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                            {moment(education.startedDate).format("DD.MM.yyyy")}
                          </Table.Cell>
                        </Table.Row>

                        <Table.Row textAlign="center">
                          <Table.Cell>
                            {" "}
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}
                            >
                              Mezuniyet Tarihi:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                               {education.graduationDate} 
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Card.Meta>
                </Card.Content>

                <Card.Description>
                  {" "}
                 <EducationUpdate education={education}/>
                </Card.Description>
              </Card>
            ))}
          </Message>
        </Container>
      </Segment>
    </div>
  );
}