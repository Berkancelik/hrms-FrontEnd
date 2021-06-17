import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src={"https://avatars.githubusercontent.com/u/79005929?v=4"} />
        <Dropdown pointing="top left" text="Berkan Çelik">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
        <Dropdown.Item as={NavLink} to="/adminjobadvertrismentlist" text="Sisteme düşen iş ilanları" icon="info" /> 
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
         
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}