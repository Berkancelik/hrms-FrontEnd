import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkillService from "../../services/skillService";
import {
  Label,
  Table,
  Button,
  Icon,
  Segment,
  Container,
  Message,
  Card
} from "semantic-ui-react";
import UpdateSkill from "./UpdateSkill";

export default function SkillList() {
  let { candidateId } = useParams();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    let skillService = new SkillService();
    skillService
      .getskills(candidateId)
      .then((result) => setSkills(result.data.data));
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
              <Icon name="code" color="violet" /> Yetenekler{" "}
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

            {skills.map((resumeSkill) => (
              <Card fluid color="violet" key={resumeSkill.id}>
                <Card.Content>
                  <Card.Meta>
                    <Table basic="very" style={{ marginTop: "2em" }}>
                      <Table.Body>
                      <Table.Row textAlign="center">
                        <Table.Cell width={8}>
                          <Label
                            basic
                            color="violet"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Teknoloji Adı:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          width={8}
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                          {resumeSkill.skillName}
                        </Table.Cell>
                      </Table.Row>
                      </Table.Body>
                    </Table>
                  </Card.Meta>
                  <Card.Description>
               <UpdateSkill resumeSkill={resumeSkill}/>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Message>
        </Container>
      </Segment>
    </div>
  );
}