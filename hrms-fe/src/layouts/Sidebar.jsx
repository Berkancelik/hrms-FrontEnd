import React from "react";
import { Icon, Menu,Grid,GridColumn } from 'semantic-ui-react'

export default function Section() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item
          name="bullhorn"
        >
          <Icon name="bullhorn" />//
          İş Başlıkları
        </Menu.Item>

        <Menu.Item
          name="user"
        >
        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          İş Veren
        </Menu.Item>
          <Icon name="user" />//
          iş Arayan
        </Menu.Item>

       
      </Menu>
    </div>
  );

  }