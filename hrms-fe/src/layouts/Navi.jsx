import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large" color="violet">
        <Container>
          <Menu.Item name="address card">
            <Icon name="address card" size="large" />
            İnsan Kaynakları Yönetimi Sistemi
          </Menu.Item>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş İlanları" />
          <Menu.Item name="Şirketler" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button primary>Kaydol</Button>
                <Button.Or />
                <Button positive>Giriş Yap</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

    






    

