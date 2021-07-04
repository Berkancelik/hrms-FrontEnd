import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Segment, Container, Icon, Message, Card } from "semantic-ui-react";
import CoverLetterService from "../../../services/coverLetterService";
import UpdateCoverLetter from "../update/UpdateCoverLetter";

export default function CoverLetter() {
  let { candidateId } = useParams();
  const [coverLetters, setcoverLetters] = useState([]);

  useEffect(() => {
    let coverletterService = new CoverLetterService();
    coverletterService
      .getCoverLetter(candidateId)
      .then((result) => setcoverLetters(result.data.data));
  }, [candidateId]);
  return (
    <div>
      <Segment circle="true" vertical>
        <Container>
          {" "}
          {coverLetters.map((coverLetter) => (
            <Message color="olive" key={coverLetter.id}>
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
                <Icon name="edit" color="violet" /> Ön Yazı{" "}
              </Message.Header>
              <UpdateCoverLetter coverLetter={coverLetter} />

              <Card fluid color="purple">
                <Card.Content
                  style={{
                    textalign: "left",
                    fontSize: "1.5em",
                    color: "black",
                    marginTop: "0.75em",
                  }}
                >
                  {coverLetter.coverLetter}
                </Card.Content>
              </Card>
            </Message>
          ))}
        </Container>
      </Segment>
    </div>
  );
}