  
import "./css/JobAdvert.css";

import React, { useState } from "react";
import JobAdvertisementList from "../pages/JobAdvertisements/JobAdvertisementList";

import { Grid } from "semantic-ui-react";
import JobAdvertisementDetails from "../pages/JobAdvertisements/JobAdvertisementDetails";

export default function JobAdvertisements() {
  const [jobAdvertisement, setJobAdvertisement] = useState(null);

  const setCurrentJobAdvertisement = (value) => {
    setJobAdvertisement(value);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <JobAdvertisementList setCurrentJobAdvert={setCurrentJobAdvertisement} />
          </Grid.Column>
          <Grid.Column width={8}>
            <JobAdvertisementDetails jobAdvertisement={jobAdvertisement} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}