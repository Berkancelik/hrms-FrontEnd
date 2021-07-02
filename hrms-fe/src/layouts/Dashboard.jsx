import React from 'react'
import {Route} from 'react-router-dom'
import { Grid } from "semantic-ui-react";
import EmployeesList from '../pages/Employee/EmployeesList';
import JobConfirmList from '../pages/Employee/JobConfirmList';
import EmployerUpdateConfirm from '../pages/Employee/EmployerUpdateConfirm';
import EmployerList from '../pages/Employer/EmployerList';
import CandidateList from '../pages/Candidate/CandidateList';
import JobAdvertisementAdd from '../pages/JobAdvertisement/JobAdvertisementAdd';
import FavoriteJobAdvertisement from '../pages/Candidate/FavoriteJobAdvertisement';
import JobAdvertisementDetail from '../pages/JobAdvertisement/JobAdvertisementDetail';
import Resume from '../pages/Resume/Resume';
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import JobaAdvertisementAdd from '../pages/JobAdvertisement/JobAdvertisementAdd';
import HomePage from '../pages/HomePage'

export default function Dashboard() {
  return (
    <div>


      <Grid>
        <Grid.Row>
          <Grid.Column>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path='/jobadvertisements/:jobTtitle/:city/:workHour' component={JobaAdvertisementAdd}/>
          <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
          <Route exact path="/employers" component={EmployerList} />
          <Route exact path="/employers/:id" component={EmployerList} />
          <Route exact path="/jobconfirm" component={JobConfirmList} />
          <Route exact path="/employerconfirm" component={EmployerUpdateConfirm} />
          <Route exact path="/employees" component={EmployeesList} />
          <Route exact path="/candidates" component={CandidateList} />
          <Route exact path="/jobadd" component={JobAdvertisementAdd} />
          <Route exact path="/favorites" component={FavoriteJobAdvertisement} />
          <Route exact path="/jobadvertisements/:id" component={JobAdvertisementDetail}/>
          <Route exact path="/resume/:candidateId" component={Resume} />

          </Grid.Column> 
        </Grid.Row>
      </Grid>
   
    </div>
  )
}