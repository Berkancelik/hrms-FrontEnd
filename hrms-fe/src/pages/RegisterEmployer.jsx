import React from "react";
import { NavLink } from "react-router-dom";
import {Button,Form,Grid,Header,Image,Message,Segment,}
from "semantic-ui-react";

export default function RegisterEmployer() {
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" inverted color="red" textAlign="center">
            <Header.Content>
              <Image src="https://www.ketmedya.com/wp-content/uploads/2021/01/ankara-ozel-yazilim.png"size="tiny" />
              <Header.Content>İşveren Yeni Üyelik Oluştur</Header.Content>
            </Header.Content>
          </Header>
          <Form size="large">
            <Segment textAlign="left" color="red" stacked>
              <Form.Input
                fluid
                icon="warehouse"
                iconPosition="left"
                label="Şirket Adı"
                placeholder="Şirket adı"
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                label="Telefon Numarası"
                placeholder="Telefon numarası"
              />

              <Form.Input
                fluid
                icon="world"
                iconPosition="left"
                label="Web Sitesi"
                placeholder="Web Sitesi"
              />
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
                label="Şifre Oluştur"
                placeholder="Şifre"
                type="password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                label="Şifre Tekrar"
                placeholder="Şifre tekrar"
                type="password"
              />

              <Button primary fluid size="large">
                KAYIT OL
              </Button>
            </Segment>
          </Form>
          <Message>
            Zaten üye misin?{" "}
            <Button as={NavLink} to="/loginemployer" color="green">
              GİRİŞ YAP
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}