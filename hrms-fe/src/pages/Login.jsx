import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function Login() {
  return (
    <div>
      <Header as="h2" color="teal" textAlign="center">
        <Image src="http://dorukyazilim.com.tr/wp-content/uploads/2021/02/HRM1.0.jpg" /> Giriş Yap
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail adresi"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Şifre"
            type="password"
          />

          <Button color="teal" fluid size="large" disabled>
            Giriş Yap
          </Button>
        </Segment>
      </Form>
      <Message>
        Kayıtlı değilmisin? <Link to={"/register"}>Şimdi Kaydol</Link>
      </Message>
    </div>
  );
}
