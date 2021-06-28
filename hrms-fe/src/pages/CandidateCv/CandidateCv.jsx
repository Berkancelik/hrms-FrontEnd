import React, { useState, useEffect } from "react";
import { Button, Card, Image, Grid, Segment } from "semantic-ui-react";
import EducationDelete from "../layouts/cv/EducationDelete";
import EducationUpdate from "../layouts/cv/EducationUpdate";
import CandidateService from "../services/candidateService";

export default function CandidateCv() {
  const [candidateCv, setcandidateCvs] = useState(null);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getcandidatecvbyid(1)
      .then((result) => setcandidateCvs(result.data.data))
      
  }, []);
  console.log(candidateCv);

  return (
    <div>
      <Card fluid>
        <div >
          <Card.Content>
            <Image floated="left" size="small" src={candidateCv?.image.url} />

            <div style={{ float: "left" }}>
                <div style={{textAlign:"center"}}>
              <Card.Header>
                Okul Adı : {candidateCv?.educations[0].schoolName}
                <EducationUpdate  education={candidateCv?.educations} jobSeeker={candidateCv?.jobSeeker}/>
                <EducationDelete id={candidateCv?.educations[0].id}/>
              </Card.Header>
              <Card.Meta>
                Yetenekler :{" "}
                {candidateCv?.skills.map((skill) => skill.name).join(",")}
              </Card.Meta>

              <Card.Meta>
                Bağlantı Adresleri : {candidateCv?.links[0].name}:{" "}
                {candidateCv?.links[0].url}
              </Card.Meta>
              <Card.Meta>
                Diller : {candidateCv?.languages[0].language}:{" "}
                {candidateCv?.languages[0].level}
              </Card.Meta>
              <Card.Meta>
                Deneyim : İşyeri: {candidateCv?.experiences[0].workplaceName} -
                {candidateCv?.experiences[0].position}
              </Card.Meta>
              </div>
            </div>

            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Ekle
                </Button>
                <Button basic color="red">
                  Güncelle
                </Button>
              </div>
            </Card.Content>
          </Card.Content>
        </div>
      </Card>
    </div>
  );
}