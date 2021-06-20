import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Header ,Icon} from "semantic-ui-react";
import jobAdvertisementService from "../services/JobAdvertisementService";
import HourglassFullRoundedIcon from "@material-ui/icons/HourglassFullRounded";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import BusinessIcon from "@material-ui/icons/Business";

export default function ConfirmjobA() {
  let jobAService = new jobAService();

  const [jobAs, setjobAs] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByConfirmFalse()
      .then((result) => setjobAs(result.data.data));
  }, []);

  const confirm = (jobAId) => {
    jobAService
      .confirm(jobAId)
      .then(toast.success("İLAN ONAYLANDI"),window.location.reload());
  };

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <HourglassFullRoundedIcon></HourglassFullRoundedIcon>
        <Header.Content>ONAY BEKLEYEN İŞ İLANLARI</Header.Content>
      </Header>
      <Card.Group>
        {jobAs.map((jobA) => (
          <Card fluid>
            <Card.Content>
              <BusinessIcon></BusinessIcon>
              <Card.Header>{jobA.jobPosition.positionName}</Card.Header>
              <Card.Meta>{jobA.employer.companyName}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {jobA.city.name}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={() => confirm(jobA.id)}
                  inverted
                  color="green"
                >
                  ONAYLA
                </Button>
                <Button
                  as={NavLink}
                  to={`/examinejobA/${jobA.id}`}
                  inverted
                  color="blue"
                >
                  İNCELE
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}