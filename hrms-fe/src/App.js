import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import { Switch, useHistory } from "react-router-dom";
import RegisterCandidate from "./pages/Candidate/RegisterCandidate";
import LoginCandidate from "./pages/Candidate/LoginCandidate";
import RegisterEmployer from "./pages/Employer/RegisterEmployer";
import LoginEmployer from "./pages/Employer/LoginEmployer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import SignedInCandidate from "./layouts/SignedInCandidate";
import ResumeList from "./pages/Candidate/Resume/ResumeList";
import LoginEmployee from "./pages/Employee/LoginEmployee";
import ProfileCandidate from "./pages/Candidate/ProfileCandidate";
import SettingsCandidate from "./pages/Candidate/SettingsCandidate";
import ProfileEmployee from "./pages/Employee/ProfileEmployee";
import FavoriteList from "./pages/Candidate/Favorite/FavoriteList";
import ConfirmJobAdvertisement from "./pages/JobAdvertisement/ConfirmJobAdvertisement";
import JobAdvertisementDetail from "./pages/JobAdvertisement/JobAdvertisementDetail";
import JobAdvertisementAdd from "./pages/JobAdvertisement/JobAdvertisementAdd";
import ReviewJobAdvertisementDetails from "./pages/ReiewJobAdvertisementDetails";
import ResumeDetail from "./pages/Candidate/Resume/ResumeDetail";

function App() {
  const [isAuthenticatedCandidate, setIsAuthenticatedCandidate] =
    useState(false);


  const history = useHistory();

  const handleSignInCandidate = () => {
    setIsAuthenticatedCandidate(true);
    history.push("/jobadvertisements");
  }

  const handleSignOutCandidate = () => {
    setIsAuthenticatedCandidate(false);
    history.push("/home");
  }

  return (
    <div className="app">
      <ToastContainer position="top-right" />
      <Route exact path="/jobadvertisements" component={Dashboard}></Route>
      <Container className="main">
        {isAuthenticatedCandidate ? (
          <SignedInCandidate
            signOutCandidate={handleSignOutCandidate}
          ></SignedInCandidate>
        ) : (
          <Navi></Navi>
        )}     
        <Switch>
          <Route
            exact
            path={`/employee/:id/profile`}
            component={ProfileEmployee}
          ></Route>
          <Route
            exact
            path={`/candidate/:id/profile`}
            component={ProfileCandidate}
          ></Route>
          <Route
            exact
            path={`/candidate/:id/resumes`}
            component={ResumeList}
          ></Route>
          <Route
            exact
            path={`/candidate/:id/favorites`}
            component={FavoriteList}
          ></Route>
          <Route
            exact
            path={`/candidate/:id/settings`}
            component={SettingsCandidate}
          ></Route>
          <Route
            exact
            path="/candidate/:id/resume/:id"
            component={ResumeDetail}
          ></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/registercandidate"
            component={() => (
              <RegisterCandidate
                signInCandidate={handleSignInCandidate}
              ></RegisterCandidate>
            )}
          ></Route>
          <Route
            exact
            path="/logincandidate"
            component={() => (
              <LoginCandidate
                signInCandidate={handleSignInCandidate}
              ></LoginCandidate>
            )}
          ></Route>
          <Route
            exact
            path="/registeremployer"
            component={RegisterEmployer}
          ></Route>
          <Route exact path="/loginemployer" component={LoginEmployer}></Route>
          <Route
            exact
            path="/loginemployee"
            component={() => (
              <LoginEmployee
              ></LoginEmployee>
            )}
          ></Route>
          <Route
            exact
            path="/jobadvertisements/add"
            component={JobAdvertisementAdd}
          ></Route>
          <Route
            exact
            path="/confirmjobadvertisement"
            component={ConfirmJobAdvertisement}
          ></Route>
          <Route
            exact
            path="/jobadvertisements/:id"
            component={JobAdvertisementDetail}
          ></Route>
          <Route
            exact
            path="/reviewjobadvertisementdetails/:id"
            component={ReviewJobAdvertisementDetails}
          ></Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;