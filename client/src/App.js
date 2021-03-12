import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./components/Test";
import { AuthProvider } from "./utils/contexts/AuthContext";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/Header";
import Imgur from "./components/ImgurTest";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
            <Route exact path="/" component={Home} />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
