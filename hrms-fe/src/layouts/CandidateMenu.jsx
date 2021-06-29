import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function CandidateMenu() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item as={NavLink} to={`/candidate/${19}/profile`} name="Profil" />
        <Menu.Item
          as={NavLink}
          to={`/candidate/${19}/resumes`}
          name="Özgeçmişler"
        />
        <Menu.Item
          as={NavLink}
          to={`/candidate/${19}/settings`}
          name="Ayarlar"
        />
      </Menu>
    </div>
  );
}