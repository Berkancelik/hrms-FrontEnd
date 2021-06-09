import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function Section() {
  return (
    <div>
    <Menu inverted icon="labeled" vertical color="violet">
      <Menu.Item name="bullhorn">
        <Icon name="bullhorn" />
        İş İlanı
      </Menu.Item>

      <Menu.Item name="list alternate outline">
        <Icon name="list alternate outline" />
        İş Pozisyonu
      </Menu.Item>

      <Menu.Item name="user">
        <Icon name="user" />
        İş Arayan
      </Menu.Item>

      <Menu.Item name="user">
        <Icon name="user" />
        İş Veren
      </Menu.Item>

      <Menu.Item name="user">
        <Icon name="user" />
        Sistem Kullanıcısı
      </Menu.Item>
    </Menu>
  </div>
  );

  }