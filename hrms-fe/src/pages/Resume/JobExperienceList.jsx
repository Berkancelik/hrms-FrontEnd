import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import JobExperienceService from '../../services/jobExperienceService'
import { Label,Button,Table,Card,Container,Segment,Icon,Message } from 'semantic-ui-react'
import * as moment from 'moment'
import UpdateJobExperience from './update/UpdateJobExperience'

export default function JobExperienceList() {

    let {candidateId}=useParams()
   const [jobExperiences, setjobExperiences] = useState([])
   useEffect(() => {
      let jobExperienceService=new JobExperienceService();
      jobExperienceService.getJobExperiences(candidateId).then(result=>setjobExperiences(result.data.data))
   }, [candidateId])

    return (
        <div>
             <Segment circle="true"  vertical>
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
              <Icon name="building outline" color="violet" /> İş Deneyimleri {" "}
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
            {jobExperiences.map((jobExperience) => (
              <Card fluid color="violet" key={jobExperience.id}>
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
                              Şirket adı:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                            textAlign="center"
                          >
                            {" "}
                            {jobExperience.companyName}
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
                              İş Pozisyonu:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                            {jobExperience.jobTitle}
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
                             {moment(jobExperience.startedDate).format("DD.MM.yyyy")}
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
                              Bitiş Tarihi:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                          {moment(jobExperience.endedDate).format("DD.MM.yyyy")}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Card.Meta>
                </Card.Content>

                <Card.Description>
                  {" "}
                <UpdateJobExperience jobExperience={jobExperience}/>
                </Card.Description>
              </Card>
            ))}
          </Message>
        </Container>
      </Segment>
        </div>
    )
}