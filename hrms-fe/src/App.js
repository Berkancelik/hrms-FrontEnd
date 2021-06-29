import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import AddJobAdvertisement from "./pages/AddJobAdvertisement";
import ConfirmJobAdvertisement from "./pages/ConfirmJobAdvertisement";
import JobAdvertisementsDetail from "./pages/JobAdvertisementsDetail";
import ReviewJobAdvertisementDetails from "./pages/ReviewJobAdvertisementDetails";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import { Switch, useHistory } from "react-router-dom";
import RegisterCandidate from "./pages/candidate/RegisterCandidate";
import LoginCandidate from "./pages/candidate/LoginCandidate";
import RegisterEmployer from "./pages/Employer/RegisterEmployer";
import LoginEmployer from "./pages/Employer/LoginEmployer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import SignedInCandidate from "./layouts/SignedInCandidate";
import ResumeList from "./pages/candidate/Resume/ResumeList";
import LoginEmployee from "./pages/employee/LoginEmployee";
import Profilecandidate from "./pages/candidate/Profilecandidate";
import SettingsCandidate from "./pages/candidate/SettingsCandidate";
import ProfileEmployee from "./pages/employee/ProfileEmployee";
import FavoriteList from "./pages/candidate/Favorite/FavoriteList";

function App() {
  const [isAuthenticatedCandidate, setIsAuthenticatedCandidate] =
    useState(false);


  const history = useHistory();

  function handleSignInCandidate() {
    setIsAuthenticatedCandidate(true);
    history.push("/jobadvertisement");
  }

  function handleSignOutCandidate() {
    setIsAuthenticatedCandidate(false);
    history.push("/home");
  }


  return (
    <div className="app">
      <ToastContainer position="top-right" />
      <Container className="main">
        {isAuthenticatedCandidate ? (
          <SignedInCandidate
            signOutcandidate={handleSignOutCandidate}
          ></SignedInCandidate>
        ) : (
          <Navi></Navi>
        )}
      
        <Switch>
          <Route
            exact
            path={`/employee/:userId/profile`}
            component={ProfileEmployee}
          ></Route>
          <Route
            exact
            path={`/candidate/:id/profile`}
            component={Profilecandidate}
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
          <Route exact path="/jobadvertisement" component={Dashboard}></Route>
          <Route
            exact
            path="/jobadvertisement/add"
            component={AddJobAdvertisement}
          ></Route>
          <Route
            exact
            path="/connfirmjoaadvertisement"
            component={ConfirmJobAdvertisement}
          ></Route>
          <Route
            exact
            path="/jobadvertisement/:id"
            component={JobAdvertisementsDetail}
          ></Route>
          <Route
            exact
            path="/reviewjobadvertisement/:id"
            component={ReviewJobAdvertisementDetails}
          ></Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;