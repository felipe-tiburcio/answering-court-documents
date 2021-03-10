import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Dependentes from "./Components/Dependentes";
import Consignacoes from "./Components/Consignacoes";
import Protocolo from "./Components/Protocolo";
import MS from "./Components/MS";
import PA from "./Components/PA";
import Residuos from "./Components/Residuos";
import Vinculos from "./Components/Vinculos";


export default function App() {
  

  return (
    <div>
      <Header/>
      <Nav/>
    
      <Router>
        <Switch>
            <Route path="/dependentes">
              <Dependentes/>
            </Route>
            
            <Route path="/MS">
              <MS/>
            </Route>
            
            <Route path="/PA">
              <PA/>
            </Route>
            
            <Route path="/protocolo">
              <Protocolo/>
            </Route>
            
            <Route path="/residuos">
              <Residuos/>
            </Route>
            
            <Route path="/">
              <Vinculos/>
            </Route>
            
            <Route exact path="/consignacoes">
              <Consignacoes/>
            </Route>

        </Switch>  
      </Router>

      <Footer/>
    </div>
  );
}
