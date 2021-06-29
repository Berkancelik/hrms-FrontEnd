import React from "react";
import {Button,Form,Grid,Header,Segment,} 
from "semantic-ui-react";

export default function LoginEmployee({signIn}) {
  return (
    <div>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" inverted color="red" textAlign="center">
            <Header.Content>
              <Header.Content>Sistem Personeli Girişi</Header.Content>
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
              <Button onClick={signIn} primary fluid size="large">
                SİSTEM PERSONELİ GİRİŞİ YAP
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}