import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./utils/contexts/AuthContext";
import Home from "./components/Home";
import Header from "./components/Header";
import Admin from "./components/pages/Admin/index";
import "bootstrap/dist/css/bootstrap.min.css";
import UserAccount from "./components/UserAccount";
import PrivateRoute from "./components/PrivateRoute";
import Voting from "./components/Voting";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={UserAccount} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route exact path="/vote" component={Voting} />
          {/* <Route exact path="/logout" component={Logout} /> */}
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
