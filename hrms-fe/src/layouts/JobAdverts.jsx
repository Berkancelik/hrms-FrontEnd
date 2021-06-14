  
import "./css/JobAdvert.css";

import React, { useState } from "react";
import JobAdvertList from "../pages/JobAdvertings/JobAdvertList";

import { Grid } from "semantic-ui-react";
import JobAdvertDetails from "../pages/JobAdvertings/JobAdvertDetails";

export default function JobAdvertings() {
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
            <JobAdvertDetails jobAdvert={jobAdvert} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}