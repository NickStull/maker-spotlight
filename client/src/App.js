import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./components/Test";
import { AuthProvider } from "./utils/contexts/AuthContext";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/Header";
import Imgur from "./components/ImgurTest";
<<<<<<< HEAD
import Admin from "./components/pages/Admin/index";
=======
import "bootstrap/dist/css/bootstrap.min.css"
>>>>>>> main

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
<<<<<<< HEAD
          <SignupButton />
          <Route exact path="/admin" component={Admin} />
=======
          <Signup />
          <Imgur />
>>>>>>> main
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
