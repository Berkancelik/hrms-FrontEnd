import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Dropdown, Menu, Image, Icon,Divider } from "semantic-ui-react";

export default function SignedInCandidate({ signOut }) {
  return (
    <div>
      <Menu color="blue" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
            <Image src="https://www.ketmedya.com/wp-content/uploads/2021/01/ankara-ozel-yazilim.png" size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobadvertisements">
            İş İlanları
          </Menu.Item>
          <Menu.Item>Özgeçmişler</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Image
                src={
                  "https://avatars.githubusercontent.com/u/79005929?v=4"
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