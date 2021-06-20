import React from "react";
import { Grid, Button } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Cities from "./Cities";
import JobPositions from "./JobPositions";

export default function Dashboard() {
  return (
    <div>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobPositions></JobPositions>
            <Cities></Cities>
            <Button primary style={{ marginTop: "15pt" }}>
              UYGULA
            </Button>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList></JobAdvertisementList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}