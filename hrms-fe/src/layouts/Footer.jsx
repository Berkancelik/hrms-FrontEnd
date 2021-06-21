import React from "react";
import {
  List,
  Header,
  Grid,
  Segment,
  Container,
  Icon,
  Divider,
  Image,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Segment inverted color="blue" vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="HAKKIMIZDA" />
                <List link inverted>
                  <List.Item as="a">Hakkımızda</List.Item>
                  <List.Item as="a">İletişim</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="YARDIM" />
                <List link inverted>
                  <List.Item as="a">Sorum var</List.Item>
                  <List.Item as="a">Önerim var</List.Item>
                  <List.Item as="a">Sık SorulanSorular</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="SOSYAL MEDYA" />
                <List link inverted>
                  <List.Item
                    href="https://www.youtube.com/channel/UCRRk9hQbw1Ix2zH6mvTlQfw"
                    target="_blank"
                    as="a"
                  >
                    <Icon name="youtube" />
                    YouTube
                  </List.Item>
                  <List.Item
                    href="https://www.instagram.com/berkancelik0/"
                    target="_blank"
                    as="a"
                  >
                    <Icon name="instagram" />
                    Instagram
                  </List.Item>
                  <List.Item
                    href="https://twitter.com/Berkancelik01"
                    target="_blank"
                    as="a"
                  >
                    <Icon name="twitter" />
                    Twitter
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Arabul.com
                </Header>
                <p>Aradığın işi bulduğun site</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          <Container textAlign="center">
            <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png" centered size="tiny" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Copyright © Berkan Çelik
              </List.Item>
              <List.Item as="a" href="#">
                İletişime Geçin
              </List.Item>
              <List.Item as="a" href="#">
                Şartlar ve Koşullar
              </List.Item>
              <List.Item as="a" href="#">
                Gizlilik Politikası
              </List.Item>
            </List>
          </Container>
        </Container>
      </Segment>
    </div>
  );
}