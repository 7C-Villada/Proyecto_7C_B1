import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Prueba from "./components/Prueba/Prueba";
import Home from "./components/Pages";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Colabora from "./components/Pages/Colabora";
import CampoEscuela from "./components/Pages/CampoEscuela";
import Reserva from "./components/Pages/Reserva";
import Campamentos from "./components/Pages/Campamentos";
import Conocenos from "./components/Pages/Conocenos";
import TalleresProyectos from "./components/Pages/TalleresProyectos";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/talleres-y-proyectos" component={TalleresProyectos} />
          <Route path="/conocenos" component={Conocenos} />
          <Route path="/campamentos" component={Campamentos} />
          <Route path="/reserva" component={Reserva} />
          <Route path="/campo-escuela" component={CampoEscuela} />
          <Route path="/colabora" component={Colabora} />
          <Route path="/prueba" component={Prueba} />
          <Route path="/" component={Home} exact />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
