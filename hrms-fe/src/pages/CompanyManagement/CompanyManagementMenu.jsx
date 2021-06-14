import React from "react";
import { Menu } from "semantic-ui-react";

export default function CompanyManagementMenu() {
  let activeItem = "my-job-adverts";

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>CompanyName</Menu.Item>
        <Menu.Item
          name="job-adverts"
          active={activeItem === "my-job-adverts"}
        >
          İş ilanlarım
        </Menu.Item>
      </Menu>
    </div>
  );
}