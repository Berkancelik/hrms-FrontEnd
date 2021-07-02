import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moment from "moment";
import {Container,Segment,Grid, Card, Icon, Label, Table, Button} from "semantic-ui-react";
import swal from "sweetalert";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import FavoriteService from "../../services/favoriteService";

export default function JobAdvertisementDetails() {
  let { id } = useParams();
  const [jobPost, setJobPost] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByJobAdvertisementId(id)
      .then((result) => setJobPost(result.data.data));
  }, [id]);

const addtoFavorites=()=>{
  let favoriteService=new FavoriteService();
  const favorite={
    candidateId:1,
    jobAdvertisementId:id
  }
  favoriteService.add(favorite).then(swal("Başarılı!", "Favorilere eklendi!", "success"));
}


  return (
    <div>
      <Segment circle="true" style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={11}>
                <Card fluid color="green">
                  <Card.Content>
                 
                    <Card.Header
                      textAlign="center"
                      style={{
                        fontSize: "2em",
                        color: "purple",
                        marginTop: "1em",
                      }}
                    >
                      
                      {jobPost.jobTitle?.jobTitle} 
                    </Card.Header>
                    <Card.Meta
                      textAlign="center"
                      style={{
                        fontSize: "1.5em",
                        color: "grey",
                        marginTop: "1em",
                      }}
                    >
                      <Icon name="building outline" color="brown" />{" "}
                      {jobPost.employer?.companyName}
                    </Card.Meta>
                    <Card.Meta
                      textAlign="center"
                      style={{
                        fontSize: "1.5em",
                        color: "grey",
                        marginTop: "0.50em",
                      }}
                    >
                      <Icon name="map marker" color="blue" />{" "}
                      {jobPost.city?.cityName}
                    </Card.Meta>

                    <Card.Description
                      style={{
                        color: "grey",
                        fontSize: "1.5em",
                        textAlign: "center",
                      }}
                    >
                      {jobPost.description}
                    </Card.Description>
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
                                color="green"
                                pointing="right"
                                style={{
                                  fontSize: "1.2em",
                                }}
                              >
                                Maaş Aralığı:
                              </Label>
                            </Table.Cell>
                            <Table.Cell style={{
                                  fontSize: "1.4em",
                                }} textAlign="center">
                              {" "}
                              {jobPost.salaryMin} <Icon name="lira" /> -{" "}
                              {jobPost.salaryMax} <Icon name="lira" />
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row textAlign="center">
                            <Table.Cell>
                              {" "}
                              <Label basic color="green" pointing="right" style={{
                                  fontSize: "1.2em",
                                }}>
                                Çalışma Tipi:
                              </Label>
                            </Table.Cell>
                            <Table.Cell style={{
                                  fontSize: "1.4em",
                                }}>
                              {jobPost.workType?.workType}
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row textAlign="center">
                            <Table.Cell>
                              {" "}
                              <Label basic color="green" pointing="right" style={{
                                  fontSize: "1.2em",
                                }}>
                                Çalışma Zamanı Tipi:
                              </Label>
                            </Table.Cell>
                            <Table.Cell style={{
                                  fontSize: "1.4em",
                                }}>
                              {jobPost.workHour?.workHour}
                            </Table.Cell>
                          </Table.Row>

                          <Table.Row textAlign="center">
                            <Table.Cell>
                              {" "}
                              <Label basic color="green" pointing="right" style={{
                                  fontSize: "1.2em",
                                }}>
                                Son Başvuru Tarihi:
                              </Label>
                            </Table.Cell>
                            <Table.Cell style={{
                                  fontSize: "1.4em",
                                }}>
                              {moment(jobPost.deadline).format(
                                "DD.MM.yyyy"
                              )}
                            </Table.Cell>
                          </Table.Row>

                          <Table.Row textAlign="center">
                            <Table.Cell>
                              {" "}
                              <Label basic color="green" pointing="right" style={{
                                  fontSize: "1.2em",
                                }}>
                                Alınacak Personel Sayısı:
                              </Label>
                            </Table.Cell>
                            <Table.Cell style={{
                                  fontSize: "1.4em",
                                }}>{jobPost.openTitleCount}</Table.Cell>
                          </Table.Row>
                         
                        </Table.Body>
                       
                      </Table><Button basic color="red"  size="large" onClick={()=>addtoFavorites()} ><Icon name="heart"/> Favorilere Ekle</Button>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={5} stretched>
                {" "}
                <Card fluid color="green" >
                  <Card.Content>
                    <Card.Header
                      textAlign="center"
                      style={{
                        fontSize: "2em",
                        marginTop: "3.5em",
                        color: "purple",
                      }}
                    >
                      {jobPost.employer?.companyName}
                    </Card.Header>
                    <Card.Meta
                      textAlign="center"
                      style={{
                        fontSize: "1.5em",
                        color: "black",
                        marginTop: "1.5em",
                      }}
                    >
                      {" "}
                      <Icon name="mail" color="grey" pointing="right" />
                      {" : "}
                      {jobPost.employer?.email}
                    </Card.Meta>

                    <Card.Meta
                      textAlign="center"
                      style={{
                        fontSize: "1.5em",
                        color: "black",
                        marginTop: "1.5em",
                      }}
                    >
                      {" "}
                      <Icon name="globe" color="grey" />
                      {" : "}
                      {jobPost.employer?.webAddress}
                    </Card.Meta>

                    <Card.Meta
                      textAlign="center"
                      style={{
                        fontSize: "1.5em",
                        color: "black",
                        marginTop: "1.5em",
                      }}
                    >
                      {" "}
                      <Icon name="phone" color="grey" />
                      {" : "}
                      {jobPost.employer?.phoneNumber}
                    </Card.Meta>
                    <Card.Meta
                      textAlign="center"
                      style={{
                        fontSize: "1.5em",
                        color: "black",
                        marginTop: "1.5em",
                        marginRight: "1.2em",
                        marginBottom: "3.2em",
                      }}
                    >
                      {" "}
                      <Icon name="calendar outline" color="grey" />
                      {" : "}
                      {moment(jobPost.employer?.createdDate).format(
                        "DD.MM.yyyy"
                      )}
                    </Card.Meta>
                    <Card.Description>
                      <Button basic color="green"  size="large" >
                        Başvur
                      </Button>
                    </Card.Description>
                   
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}