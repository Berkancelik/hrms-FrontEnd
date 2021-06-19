import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import SideBar from "./SideBar";

import { Route } from "react-router";

import Home from "./Home";
import AdminJobAdvertList from "../pages/Admin/JobAdvertisements/AdminJobAdvertisementList";
import EmployerJobAdvertisementList from "../pages/Employer/EmployerJobAdvertisementList";
import JobTitleList from "../pages/JobTitleList";
import Candidate from "../pages/CandidatList";
import CandidateDetail from "../pages/CandidateDetail";
import EmployerList from "../pages/EmployerList";
import AdminJobAdvertisementList from "../pages/Admin/JobAdvertisements/AdminJobAdvertisementList";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import JobAdvertisementList from "../pages/JobAdvertisementList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <SideBar />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={Home} />
            <Route exact path="/candidates" component={Candidate} />
            <Route path="/candidates/:id" component={CandidateDetail}/>
            <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
            <Route exact path="/jobtitles" component={JobTitleList} />
            <Route path ="/employers" component={EmployerList}/>
            <Route path="/jobadvertisementadd" component ={JobAdvertisementAdd}/>
            <Route path="/adminjobadvertisementlist" component={AdminJobAdvertisementList}/>
            <Route path="/employerjobadvertisementlist" component={EmployerJobAdvertisementList}/>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}