import React from "react";
import { Grid } from "semantic-ui-react";
import Section from "./Section";
import SideBar from "./SideBar";
export default function Dashboard(){
    return(
        <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <SideBar/>
            </Grid.Column>
            <Grid.Column width={16}>
                <Section/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
   
    </div>
    );
}