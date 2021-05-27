import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Prueba from "./components/Prueba/Prueba";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/prueba">
            <Prueba />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
