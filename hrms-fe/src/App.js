import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import JobAdvertisementAdd from "./pages/JobAdvertisementAdd";
import ConfirmJobAdvertisements from "./pages/ConfirmJobAdvertisements";
import JobAdvertisementsDetail from "./pages/JobAdvertisementsDetail";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import { Switch, useHistory } from "react-router-dom";
import RegisterCandidate from "./pages/RegisterCandidate";
import LoginCandidate from "./pages/LoginCandidate";
import RegisterEmployer from "./pages/RegisterEmployer";
import LoginEmployer from "./pages/LoginEmployer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import SignedInCandidate from "./layouts/SignedInCandidate";
import ReviewJobAdvertisementDetails from "./pages/ReviewJobAdvertisementDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handleSignIn(params) {
    setIsAuthenticated(true);
    history.push("/jobAdvertisements")
  }

  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/home")
  }
  return (
    <div className="app">
      <ToastContainer position="top-right" />
      <Container className="main">
        {isAuthenticated ? (
          <SignedInCandidate signOut={handleSignOut}></SignedInCandidate>
        ) : (
          <Navi></Navi>
        )}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/registercandidate"
            component={() => (
              <RegisterCandidate signIn={handleSignIn}></RegisterCandidate>
            )}
          ></Route>
          <Route
            exact
            path="/logincandidate"
            component={() => (
              <LoginCandidate signIn={handleSignIn}></LoginCandidate>
            )}
          ></Route>
          <Route
            exact
            path="/registeremployer"
            component={RegisterEmployer}
          ></Route>
          <Route exact path="/loginemployer" component={LoginEmployer}></Route>
          <Route exact path="/jobAdvertisements" component={Dashboard}></Route>
          <Route
            exact
            path="/jobAdvertisements/add"
            component={JobAdvertisementAdd}
          ></Route>
          <Route
            exact
            path="/confirmjobadvertisements"
            component={ConfirmJobAdvertisements}
          ></Route>
          <Route
            exact
            path="/jobadvertisements/:id"
            component={JobAdvertisementsDetail}
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