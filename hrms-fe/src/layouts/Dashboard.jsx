import React from "react";
import Section from "./Section";

import { Grid, Sidebar } from "semantic-ui-react";

export default function Dashboard(){
    return(
      <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Section />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    );
}