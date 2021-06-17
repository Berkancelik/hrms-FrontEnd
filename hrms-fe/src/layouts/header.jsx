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
                src={"data:image/png;base64,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"}
                size="medium"
                rounded
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header icon>
                <Icon name="world" />
                Şehir Ara
              </Header>

              <Search placeholder="Şehirleri Ara..." />
            </Grid.Column>

            <Grid.Column width={3}>
              <Header icon>
                <Icon name="ara" />
                İş Ara
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