import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Header, Icon, Grid ,Image} from "semantic-ui-react";

export default function HomePage() {
  return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <div>
              <Header
                style={{ fontSize: "50pt" }}
                inverted
                color="red"
                icon
                textAlign="left"
              >
                <Header.Content>
                  HAYALİNDEKİ <br />
                  İŞİ BUL
                </Header.Content>
              </Header>
              <Header
                style={{ fontSize: "25pt" }}
                inverted
                color="red"
                icon
                textAlign="left"
              >
                <Header.Content>
                  Yüzlerce İş İlanından<br />
                  Kendine Uygun İşi Hemen Bul!
                </Header.Content>
              </Header>
              <Button as={NavLink} to="/jobadvertisements" color="green" size="huge">
                İŞ ARA
                <Icon name="right arrow" />
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="homeImage"></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
}