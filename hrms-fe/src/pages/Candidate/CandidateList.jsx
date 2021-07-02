import React, { useState, useEffect } from "react";
import {Button,Container,Header,Image,Segment,Card,Icon,Pagination, Grid,} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CandidateService from "../../services/candidateService";
export default function CandidateList() {
 
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);
  return (
    <div>
      <Segment circle="true" style={{ padding: "8em 0em" }} vertical>
        <Container>
          <Header circle="true" as="h3" style={{ fontSize: "3em" }}>
            İş Arayanlar 
          </Header>
          <Card.Group itemsPerRow={1}>
            {candidates.map((candidate) => (
              <Card
                fluid
                color="blue"
                circle="true"
                style={{
                  minHeight: 350,
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  padding: "3.4em 1em",
                }}
                key={candidate.id}
              >
                <Grid>
                  <Grid.Column width={3}>
                    <Image
                    centered
                    style={{ marginLeft: "10em", marginBottom: "2em",marginTop:"2em" }}
                      verticalAlign="bottom"
                      src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                      size="small"
                      circular
                    />
                    {""}
                  </Grid.Column>
                  <Grid.Column width={10}>
                  <Card.Content style={{ marginTop: "1em"}} >
                    <Card.Header style={{fontSize: "2em"}}>
                      {candidate.firstName} {candidate.lastName}
                    </Card.Header>

                    <Card.Description textAlign="center" style={{ marginTop: "3em"}} >
                      {" "}
                      <Icon
                        circular
                        fitted
                        color="violet"
                        name="circle"
                      />{" "}
                      {candidate.identityNumber}-{candidate.password}
                    </Card.Description>
 
                    <Card.Description
                      textAlign="center"
                      
                    >
                      {" "}
                      <Icon fitted circular color="orange" name="mail" />{" "}
                      {candidate.email}
                    </Card.Description>
                    <Card.Description textAlign="center"  >
                      {" "}
                      <Icon
                        circular
                        fitted
                        color="green"
                        name="calendar alternate"
                      />{" "}
                      {candidate.birthDate}
                    </Card.Description>
                  </Card.Content>
                  </Grid.Column>
                  <Grid.Column width={3}>

                        <Button
                         as={NavLink}
                         to={`/resume/${candidate.id}`}
                        style={{ marginTop: "1.5em" }}
                    circular
                    
                    animated
                    basic
                    color="red"
                    size="big"
                  >
                    <Button.Content visible>Profile Git</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>

                  <Button
                         as={NavLink}
                         to={`/favorites`}
                        style={{ marginTop: "1.5em" }}
                    circular
                    
                    animated
                    basic
                    color="red"
                    size="big"
                  >
                    <Button.Content visible>Favorilere Git</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                  </Grid.Column>
                </Grid>  
              </Card>
            ))}
          </Card.Group>
          <br />

          <Pagination
            style={{ marginTop: "3.5em" }}
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={10}
            circle="true"
            size="massive"
          />
        </Container>
      </Segment>
    </div>
  );
}