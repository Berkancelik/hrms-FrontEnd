import React from "react";
import { NavLink } from "react-router-dom";
import {Button,Form,Grid,Header,Image,Message,Segment,} 
from "semantic-ui-react";
import logo from "../images/logo.png";
import register from "../images/register.png";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterCandidate({signIn}) {
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={register} size="huge"></Image>
          </Grid.Column>
          <Grid.Column width={10} style={{ maxWidth: 450 }}>
            <Header as="h2" inverted color="red" textAlign="center">
              <Header.Content>
                <Image src={logo} size="tiny" />
                <Header.Content>Yeni Üyelik Oluştur</Header.Content>
              </Header.Content>
            </Header>
            <Form size="large">
              <Segment textAlign="left" color="red" stacked>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    label="İsim"
                    labelPosition="left"
                    placeholder="İsim"
                  />
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    label="Soyisim"
                    labelPosition="left"
                    placeholder="Soyisim"
                  />
                </Form.Group>

                <Form.Input
                  fluid
                  icon="id card"
                  iconPosition="left"
                  label="TC kimlik Numarası"
                  labelPosition="left"
                  placeholder="TC kimlik numarası"
                />
                <Form.Input
                  fluid
                  icon="birthday cake"
                  iconPosition="left"
                  label="Doğum Tarihi"
                  labelPosition="left"
                  placeholder="Doğum Tarihi"
                  type="date"
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  label="E-posta Adresi"
                  labelPosition="left"
                  placeholder="E-posta adresi"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Şifre"
                  labelPosition="left"
                  placeholder="Şifre"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Şifre Tekrar"
                  labelPosition="left"
                  placeholder="Şifre tekrar"
                  type="password"
                />

                <Button onClick={signIn} primary fluid size="large">
                  KAYIT OL
                </Button>
              </Segment>
            </Form>
            <Message>
              Zaten üye misin?{" "}
              <Button as={NavLink} to="/logincandidate" color="green">
                GİRİŞ YAP
              </Button>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}