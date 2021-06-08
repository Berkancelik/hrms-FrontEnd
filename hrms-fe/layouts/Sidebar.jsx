import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobseekerList from "../pages/User/Candidate/CandidateList";
import JobAdvertList from "../pages/JobAdvertisements/JobAdvertisementsList";
import JobPositionList from "../pages/JobAdvertisements/JobTitle/JobTitleList";


import React from "react";
import { Icon, Menu } from 'semantic-ui-react'

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