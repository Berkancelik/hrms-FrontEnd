import React from "react";
import { Grid, Button } from "semantic-ui-react";
import Cities from "./Cities";
import JobTitles from "./JobTitles";
import WorkTypes from "./WorkTypes";
import WorkHours from "./WorkHours";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";

export default function Dashboard() {
  return (
    <div>
      <JobAdvertisementList></JobAdvertisementList>
    </div>
  );
}