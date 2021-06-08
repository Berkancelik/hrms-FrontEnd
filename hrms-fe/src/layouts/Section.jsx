import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobtitleList from "../pages/JobTitleList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import CandidateList from "../pages/CandidateList";



export default function Section() {
  return (
    <div>
      <Grid>
      <Grid.Row>
          <GridColumn size={15}>
            <JobAdvertisementList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <JobtitleList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <CandidateList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        
      </Grid>
    </div>
  );

  }