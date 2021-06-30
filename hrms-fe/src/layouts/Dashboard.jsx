import React from "react";
import { Grid, Button } from "semantic-ui-react";
import Cities from "./Cities";
import JobTitles from "./JobTitles";
import WorkTypes from "./WorkTypes";
import WorkHours from "./WorkHours";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";

export default function Dashboard() {
  return (
    <div>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <div className="fixed">
              <JobTitles></JobTitles>
              <Cities></Cities>
              <WorkTypes></WorkTypes>
              <WorkHours></WorkHours>
              <Button fluid primary style={{ marginTop: "15pt" }}>
                FİLTRELE
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList></JobAdvertisementList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}