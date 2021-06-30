import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Dropdown, Menu, Image, Icon, Divider,} from "semantic-ui-react";

export default function SignedInCandidate({ signOutCandidate }) {
  return (
    <div>
      <Menu color="blue" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
          <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png" size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobadvertisements">
            İş İlanları
          </Menu.Item>
          <Menu.Item as={NavLink} to={`/candidate/${19}/resumes`}>
            Özgeçmişler
          </Menu.Item>
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
                text="Berkan Çelik"
                style={{ marginRight: "0.5em" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to={`/candidate/${19}/profile`}>
                    <Icon name="user" /> Profil
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    to={`/candidate/${19}/resumes`}
                  >
                    <Icon name="file alternate" /> Özgeçmişler
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    to={`/candidate/${19}/favorites`}
                  >
                    <Icon color="red" name="heart" /> Favoriler
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to={`/candidate/${19}/settings`}>
                    <Icon name="setting" /> Ayarlar
                  </Dropdown.Item>
                  <Divider />
                  <Dropdown.Item onClick={signOutCandidate}>
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