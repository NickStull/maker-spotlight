import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./utils/contexts/AuthContext";
import Home from "./components/Home";
import Header from "./components/Header";
import CarouselViewer from "./components/Carousel";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <CarouselViewer />
          <Route exact path="/" component={Home} />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
