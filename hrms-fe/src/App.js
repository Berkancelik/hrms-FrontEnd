import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";

import Footer from "./layouts/Footer";


function App() {
  return (
    <div className="App">
     <Navi/>
    <Dashboard/>
     <Footer/>
    </div>
  );
}

export default App;