  import React from 'react'
import { NavLink } from "react-router-dom";
import {
  Button,Form, Grid,Header,Image,Message,Segment,} from "semantic-ui-react";

export default function LoginEmployer() {
    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" inverted color="red" textAlign="center">

            <br></br>
            <Header.Content>
            <Image src="https://www.ketmedya.com/wp-content/uploads/2021/01/ankara-ozel-yazilim.png" size="small" />
              <Header.Content>İşveren Giriş Yap</Header.Content>
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
              <Button primary fluid size="large">
                İŞVEREN GİRİŞİ YAP
              </Button>
            </Segment>
          </Form>
          <Message>
            Hesabınız yok mu?{" "}
            <Button as={NavLink} to="/registeremployer" color="green">
              KAYIT OL
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
        </div>
    )
}