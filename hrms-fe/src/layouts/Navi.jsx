import React from "react";
import { Button, Container, Dropdown, Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navi({signIn}) {
  return (
    <div>
      <Menu color="blue" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
            <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png"size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/home">
            Ana Sayfa
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobadvertisements">
            İş İlanları
          </Menu.Item>
          <Menu.Item as={NavLink} to="/confirmjobadvertisement">
            Bildirimler
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                as={NavLink}
                to="/registercandidate"
                inverted
                color="black"
                style={{ marginRight: "0.5em" }}
              >
                KAYIT OL
              </Button>
              <Button
                as={NavLink}
                to="/logincandidate"
                inverted
                color="black"
                style={{ marginRight: "0.5em" }}
              >
                GİRİŞ YAP
              </Button>
              <Dropdown item text="İŞVEREN" style={{ marginRight: "0.5em" }}>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/registeremployer">
                    KAYIT OL
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/loginemployer">
                    GİRİŞ YAP
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                color="green"
                as={NavLink}
                to="/jobadvertisements/add"
              >
                İLAN YAYINLA
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}