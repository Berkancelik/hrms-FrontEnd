import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Header ,Icon} from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import HourglassFullRoundedIcon from "@material-ui/icons/HourglassFullRounded";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import BusinessIcon from "@material-ui/icons/Business";

export default function ConfirmjobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByConfirmFalse()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  const confirm = (id) => {
    jobAdvertisementService
      .confirm(id)
      .then(toast.success("İLAN ONAYLANDI"),window.location.reload());
  };

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <HourglassFullRoundedIcon></HourglassFullRoundedIcon>
        <Header.Content>ONAY BEKLEYEN İŞ İLANLARI</Header.Content>
      </Header>
      <Card.Group>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Card fluid>
            <Card.Content>
              <BusinessIcon></BusinessIcon>
              <Card.Header>{jobAdvertisement.jobTitle.jobTitle}</Card.Header>
              <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {jobAdvertisement.city.name}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={() => confirm(jobAdvertisement.id)}
                  inverted
                  color="green"
                >
                  ONAYLA
                </Button>
                <Button
                  as={NavLink}
                  to={`/examinejobAdvertisement/${jobAdvertisement.id}`}
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