import React from "react";
import { Grid } from "semantic-ui-react";
import AdminManagementMenu from "../pages/AdminManagement/AdminManagementMenu";
import AdminJobAdvertList from "../pages/AdminManagement/JobAdverts/AdminJobAdvertList";

export default function AdminManagement() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <AdminManagementMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <AdminJobAdvertList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}