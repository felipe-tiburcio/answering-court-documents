import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Nav(){
  return(
    <div class="header_2">
        <ul>
        <BrowserRouter>
        <Link to="/" class="links_topo">
              <li>Vínculos, Benefícios e Cadastro</li>
        </Link>
          
          <Link to="/dependentes" 
            class="links_topo">
              <li>Dependentes</li>
          </Link>
          
          <Link to="/consignacoes"
            class="links_topo">
              <li>Consignações</li>
          </Link>

          <Link to="/pa"  
            class="links_topo">
              <li>P.A</li>
          </Link>
          
          <Link to="/residuos" 
            class="links_topo">
              <li>Resíduos</li>
          </Link>

          <Link to="/protocolo"
            class="links_topo">
            <li>Protocolo</li>
          </Link>

          <Link to="/" 
            class="links_topo">
              <li>Mandado de Segurança</li>
          </Link>

          <Link to="/ms" 
            class="links_topo">
              <li>Outra Situação</li>
          </Link>
          </BrowserRouter>
        </ul>
       
    </div>
  )
}