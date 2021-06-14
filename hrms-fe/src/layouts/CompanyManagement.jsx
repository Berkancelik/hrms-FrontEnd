  
import React from "react";
import { Grid } from "semantic-ui-react";
import CompanyJobAdvertList from "../pages/CompanyManagement/CompanyJobAdvertList";
import CompanyManagementMenu from "../pages/CompanyManagement/CompanyManagementMenu";

export default function CompanyManagement() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CompanyManagementMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <CompanyJobAdvertList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}