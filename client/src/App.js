import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./utils/contexts/AuthContext";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import SignupButton from "./components/SignupButton";
import Admin from "./components/pages/Admin/index";
import "bootstrap/dist/css/bootstrap.min.css";
import UserAccount from "./components/UserAccount";
import AccountContainer from "./components/AccountContainer";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={AccountContainer} />
          <Route exact path="/admin" component={Admin} />
          {/* <Route exact path="/logout" component={Logout} /> */}
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
