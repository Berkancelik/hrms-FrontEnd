import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Dropdown, Menu, Image, Icon,Divider } from "semantic-ui-react";
import logo from "../images/logo.png";

export default function SignedInJobseeker({ signOut }) {
  return (
    <div>
      <Menu color="red" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
            <Image src={logo} size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobadvertisements">
            İş İlanları
          </Menu.Item>
          <Menu.Item>Özgeçmişler</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Image
                src={
                  "https://yt3.ggpht.com/DTHNfg3dNsf85L_9BgIPpQ6JgI8xq516Em7Hmocm_dR9_msRsxotMvEfzx62BuUteBUZTGy8Xg=s108-c-k-c0x00ffffff-no-rj"
                }
                size="mini"
                circular
              ></Image>
              <Dropdown
                item
                text="BERKAN ÇELİK"
                style={{ marginRight: "0.5em" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Icon name="setting" /> Ayarlar
                  </Dropdown.Item>
                  <Divider/>
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