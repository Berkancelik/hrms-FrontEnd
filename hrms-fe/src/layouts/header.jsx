import "./Header.css";
import { Grid, Header, Icon, Search, Segment, Image } from "semantic-ui-react";

export default function Header() {
  return (
    <div>
      <Segment
        inverted
        placeholder
        style={{ margin: "3em -2em 3em", padding: "30pm", height: "200px" }}
      >
        <Grid stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              <Image
                src={"../../../assets/employer.png"}
                size="medium"
                rounded
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header icon>
                <Icon name="world" />
                Find City
              </Header>

              <Search placeholder="Şehirleri Ara..." />
            </Grid.Column>

            <Grid.Column width={3}>
              <Header icon>
                <Icon name="ara" />
                Find Job
              </Header>
              <Search placeholder="İş İlanı Ara..." />
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}