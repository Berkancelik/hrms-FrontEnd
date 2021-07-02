import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Button,Container,Divider,Header,Image,Segment,Card, Icon, Pagination,} from "semantic-ui-react";
import EmployerService from "../../services/employerService";
export default function EmployerList() {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div>
      <Segment circle="true" style={{ padding: "8em 0em" }} vertical>
        <Container>
          <Header circle="true" as="h3" style={{ fontSize: "3em" }}>
            Şirketler
          </Header>
          <Card.Group itemsPerRow={3}>
            {employers.map((employer) => (
              <Card
                color="blue"
                circle="true"
                style={{
                  minHeight: 350,
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  padding: "3.4em 1em",
                }}
                key={employer.id}
              >
                <Card.Content>
                  <Image
                    verticalAlign="bottom"
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                    circular
                  />
                  {""}

                  <Card.Header style={{ marginTop: "0.90em" }}>
                    {employer.companyName}
                  </Card.Header>

                  <Card.Meta textAlign="center" style={{ marginTop: "0.50em" }}>
                    {" "}
                    <Icon fitted circular  color="orange" name="phone" />{" "}
                    {employer.phoneNumber}
                  </Card.Meta>
                  <Card.Description textAlign="center">
                    {" "}
                    <Icon   circular  fitted  color="green" name="mail" /> {employer.email}
                  </Card.Description>
                  <Card.Description textAlign="center">
                    {" "}
                    <Icon  circular fitted color="violet" name="book" /> {employer.webAddress}
                  </Card.Description>
                </Card.Content>

                <Divider>
                  <Button
                    circular
                    style={{ marginTop: "0.90em" }}
                    animated
                    basic
                    color="red"
                    size="big"
                    as={NavLink}
                    to={`/employers/${employer.id}`}
                  >
                    <Button.Content visible>Detaya Git</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Divider>
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