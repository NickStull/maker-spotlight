import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./components/Test";
import { AuthProvider } from "./utils/contexts/AuthContext";
import Signup from "./components/Signup";
import SignupButton from "./components/SignupButton";
import Home from "./components/Home";
import Header from "./components/Header";
import Imgur from "./components/ImgurTest";
import Admin from "./components/pages/Admin/index";
import "bootstrap/dist/css/bootstrap.min.css";
import UserAccount from "./components/UserAccount";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={UserAccount} />
          <Route exact path="/admin" component={Admin} />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
