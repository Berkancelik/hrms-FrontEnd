import React from "react";
import { Grid, Segment, Menu } from "semantic-ui-react";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";

export default function CandidateDashboard() {

  let { path, url } = useRouteMatch();

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu pointing vertical>
                <Menu.Item
                  name="Profil"
                />
                <Menu.Item
                  name="Özgeçmişler"
                />
                <Menu.Item
                  name="Ayarlar"
                />
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment color="green">
              <Switch>
                
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}