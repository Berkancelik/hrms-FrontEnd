import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobtitleList from "../pages/JobTitleList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import CandidateList from "../pages/CandidateList";
 


export default function Section() {
  return (
    <div>
    <Menu inverted icon="labeled" vertical color="violet">
      <Menu.Item name="bullhorn">
        <Icon name="bullhorn" />
        İş İlanları
      </Menu.Item>

      <Menu.Item name="list alternate outline">
        <Icon name="list alternate outline" />
        İş Pozisyonları
      </Menu.Item>

      <Menu.Item name="user">
        <Icon name="user" />
        İş Adayları
      </Menu.Item>

      <Menu.Item name="user">
        <Icon name="user" />
        İşverenler
      </Menu.Item>

      <Menu.Item name="user">
        <Icon name="user" />
        Sistem Kullanıcıları
      </Menu.Item>
    </Menu>
  </div>
  );

  }