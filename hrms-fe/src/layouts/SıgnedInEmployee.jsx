import React from "react";
import { NavLink, useParams } from "react-router-dom";
import {Container, Dropdown, Menu,Image,Icon,Divider,}from "semantic-ui-react";

export default function SignedInEmployee({ signOut }) {
  return (
    <div>
      <Menu color="red" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
          <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png" size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobadvertisements">
            İş İlanları
          </Menu.Item>
          <Menu.Item as={NavLink} to="/confirmjobadvertisement">
            Bildirimler
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>          
              <Dropdown
                item
                text="BERKAN  ÇELİK"
                style={{ marginRight: "0.5em" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to={`/employee/${22}/profile`}>
                    <Icon name="user" /> Profil
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to={`/candidate/${19}/settings`}>
                    <Icon name="setting" /> Ayarlar
                  </Dropdown.Item>
                  <Divider />
                  <Dropdown.Item onClick={signOut}>
                    <Icon color="red" name="log out" /> Çıkış
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}