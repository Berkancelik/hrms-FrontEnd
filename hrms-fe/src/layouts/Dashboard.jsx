import React from "react";
import Section from "./Section";

import { Grid, Sidebar } from "semantic-ui-react";

export default function Dashboard(){
    return(
        <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Sidebar/>
            </Grid.Column>
            <Grid.Column width={16}>
                <Section/>
            </Grid.Column>
          </Grid.Row>
        </Grid>   
        </div>
    );
}