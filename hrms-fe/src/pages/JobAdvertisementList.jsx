import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Card, Header,Icon } from "semantic-ui-react";
export default function JobAdvertisementList() {
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from "@material-ui/icons/Work";
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllOpenJobAdvertisementList()
      .then((result) => setJobAdvertisements(result.data.data));
  });

  return (
    <div>
      <Header className="app" as="h2" icon textAlign="center">
        <WorkIcon></WorkIcon>
        <Header.Content>İŞ İLANLARI</Header.Content>
      </Header>
      <Card.Group>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Card
            fluid
            as={NavLink}
            to={`/jobAdvertisements/${jobAdvertisement.id}`}
          >
            <Card.Content>
              <BusinessIcon></BusinessIcon>
              <Card.Header>{jobAdvertisement.jobTitle.jobTitle}</Card.Header>
              <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {jobAdvertisement.city.name}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}