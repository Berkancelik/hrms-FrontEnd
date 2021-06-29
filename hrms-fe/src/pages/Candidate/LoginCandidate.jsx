import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";


export default function LoginCandidate({signInCandidate}) {
  return (
    <div>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={6}>
          <Image src="https://ambalaj.org.tr/files/images/layout/login.png"></Image>
          </Grid.Column>
          <Grid.Column width={10} style={{ maxWidth: 450 }}>
            <Header as="h2" inverted color="red" textAlign="center">
              <Header.Content>
              <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png"size="tiny" />
                <Header.Content>Giriş Yap</Header.Content>
              </Header.Content>
            </Header>
            <Form size="large">
              <Segment textAlign="left" color="red" stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  label="E-posta Adresi"
                  placeholder="E-posta adresi"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Şifre"
                  placeholder="Şifre"
                  type="password"
                />
                <Button onClick={signInCandidate} primary fluid size="large">
                  GİRİŞ YAP
                </Button>
              </Segment>
            </Form>
            <Message>
              Hesabınız yok mu?{" "}
              <Button as={NavLink} to="/registercandidate" color="green">
                KAYIT OL
              </Button>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}