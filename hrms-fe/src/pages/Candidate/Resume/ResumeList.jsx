import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import ResumeService from "../../../services/resumeService";
import {Card, Header,Icon,Image,Segment,} from "semantic-ui-react";
import DeleteResumeModal from "../../../modals/CV/delete/DeleteResumeModal";
import AddResumeModal from "../../../modals/CV/add/AddResumeModal";
export default function ResumeList() {
  let { id } = useParams();

  const [resumes, setResumes] = useState([]);
  
  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getByCandidateId(id)
      .then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Segment color="green">
        <Header className="app" as="h2" icon textAlign="left">
          <Header.Content>
            ÖZGEÇMİŞLER{" "}
            <AddResumeModal id={21}></AddResumeModal>
          </Header.Content>
        </Header>
        <Card.Group>
          {resumes.map((resume) => (
            <Card color="green" fluid>
              <Card.Content>
                {!resume.candidate.image ? (
                  <Image
                    circular
                    floated="left"
                    size="tiny"
                    src="https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png"
                  ></Image>
                ) : (
                  <Image
                    circular
                    floated="left"
                    size="tiny"
                    src={resume.candidate.image.imageUrl}
                  ></Image>
                )}

                <Card.Header
                  as={NavLink}
                  to={`/candidate/${19}/resume/${
                    resume.id
                  }`}
                >
                  <Icon name="pen square" />
                  Düzenlemek İçin Tıklayın
                </Card.Header>
                <Card.Meta>
                  <DeleteResumeModal id={resume.id}></DeleteResumeModal>
                </Card.Meta>
                <Card.Meta>Oluşturulma Tarihi: {resume.createdDate}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
}