  
import "./css/JobAdvert.css";

import React, { useState } from "react";
import JobAdvertList from "../pages/JobAdvertisements/JobAdvertisementList";

import { Grid } from "semantic-ui-react";
import JobAdvertisementDetails from "../pages/JobAdvertisements/JobAdvertisementDetails";

export default function JobAdvertisements() {
  const [jobAdvert, setJobAdvert] = useState(null);

  const setCurrentJobAdvert = (value) => {
    setJobAdvert(value);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <JobAdvertList setCurrentJobAdvert={setCurrentJobAdvert} />
          </Grid.Column>
          <Grid.Column width={8}>
            <JobAdvertisementDetails jobAdvert={jobAdvert} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}