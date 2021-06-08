import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobseekerList from "../pages/User/Candidate/CandidateList";
import JobAdvertList from "../pages/JobAdvertisements/JobAdvertisementsList";
import JobPositionList from "../pages/JobAdvertisements/JobTitle/JobTitleList";


export default function Section() {
  return (
    <div>
      <Grid>
      <Grid.Row>
          <GridColumn size={15}>
            <JobAdvertisementsList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <JobTitleList />
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