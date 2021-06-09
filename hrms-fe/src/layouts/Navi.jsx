import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large" color="violet">
        <Container>
          <Menu.Item name="address card">
            <Icon name="address card" size="large" />
            Human Resource Management System
          </Menu.Item>
          <Menu.Item name="Home" />
          <Menu.Item name="Job Advertisements" />
          <Menu.Item name="Companies" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button primary>Sign Up</Button>
                <Button.Or />
                <Button positive>Sign In</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

    






    

