  
import React from "react";
import { Button, Container, Dropdown, Menu, Image ,Icon} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import ThemeButton from ".//ThemeButton";

export default function Navi() {
  return (
    <div>
      <Menu color="blue" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
          <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png" size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/home">
            Ana Sayfa
          </Menu.Item>
          <Menu.Item as={NavLink} to={"jobadvertisements"}>
            İş İlanları
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
              <Button color="orange" as={NavLink} to="/jobadvertisements/add">
                İLAN YAYINLA
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={NavLink} to="/loginemployee" icon>
                <Icon name="world" />
              </Button>
              <ThemeButton />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}