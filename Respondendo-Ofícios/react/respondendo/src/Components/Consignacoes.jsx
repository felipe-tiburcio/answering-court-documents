import React from "react";

function Consignacoes(){
  return(
    <div>
  <h3 className="black_subtitles">Consignações - Solicitante</h3>
  <div id="container_solicitante" className="consignacoes_containers"> 
    <label htmlFor="consignacoes_sei" className="label_inputs">SEI:</label>
    <input id="consignacoes_sei" className="inputs_geral" />
    <br />
    <label htmlFor="consignacoes_orgao" className="label_inputs">Órgão:</label>
    <input id="consignacoes_orgao" className="inputs_geral" placeholder="TJ / Vara / TRT / outros" /><br />
    <label htmlFor="consignacoes_cidade" className="label_inputs">Cidade:</label>
    <input id="consignacoes_cidade" className="inputs_geral" placeholder="Cidade" /><br />
    <label htmlFor="consignacoes_processo" className="label_inputs">Processo:</label>
    <input id="consignacoes_processo" className="inputs_geral" placeholder="Número do Processo" /><br />
    <label htmlFor="consignacoes_email" className="label_inputs">E-mail:</label>
    <input id="consignacoes_email" className="inputs_geral" placeholder="E-mail" /><br />
  </div>
  <h3 className="black_subtitles">Segurado</h3>
  <div id="container_segurado" className="consignacoes_containers"> 
    <label htmlFor="consignacoes_nome" className="label_inputs">Nome:</label>
    <input id="consignacoes_nome" className="inputs_geral" placeholder="Nome Completo" /><br />
    <label htmlFor="consignacoes_rg" className="label_inputs">RG:</label>
    <input id="consignacoes_rg" className="inputs_geral" placeholder="Número do RG" /><br />
    <label htmlFor="consignacoes_cpf" className="label_inputs">CPF:</label>
    <input id="consignacoes_cpf" className="inputs_geral" placeholder="Número do CPF" /><br />
    <label htmlFor="consignacoes_nascimento" className="label_inputs">Nasc.:</label>
    <input id="consignacoes_nascimento" className="inputs_geral" placeholder="xx/xx/xxxx" /><br />
    <label htmlFor="consignacoes_mae" className="label_inputs">Mãe:</label>
    <input id="consignacoes_mae" className="inputs_geral" placeholder="Nome da Mãe" /><br />
    <label htmlFor="consignacoes_nb" className="label_inputs">NB:</label>
    <input id="consignacoes_nb" className="inputs_geral" placeholder="Número do Benefício" /><br />
    <label htmlFor="consignacoes_contrato1" className="label_inputs">Cont.1:</label>
    <input id="consignacoes_contrato1" className="inputs_geral" placeholder="Contrato 1" /><br />
    <label htmlFor="consignacoes_agente1" className="label_inputs">Banco 1:</label>
    <input id="consignacoes_agente1" className="inputs_geral" placeholder="Banco 1" /><br />
    <label htmlFor="consignacoes_contrato2" className="label_inputs">Cont.2:</label>
    <input id="consignacoes_contrato2" className="inputs_geral" placeholder="Contrato 2" /><br />
    <label htmlFor="consignacoes_agente2" className="label_inputs">Banco 2:</label>
    <input id="consignacoes_agente2" className="inputs_geral" placeholder="Agente financeiro 2" /><br />
    <label htmlFor="consignacoes_contrato3" className="label_inputs">Cont.3:</label>
    <input id="consignacoes_contrato3" className="inputs_geral" placeholder="Contrato 3" /><br />
    <label htmlFor="consignacoes_agente3" className="label_inputs">Banco 3:</label>
    <input id="consignacoes_agente3" className="inputs_geral" placeholder="Banco 3" /><br />
  </div>
  <br />
  {/*Seleção da situação da consignação*/}
  <h3 className="black_subtitles">Situação</h3>
  <div className="consignacoes_radio">
    <input id="radio_1" type="radio" name="radio" className="radio_consignacoes" />
    <label htmlFor="radio_1">Segurado não localizado</label><br />
    <input id="radio_2" className="radio_consignacoes" type="radio" name="radio" />
    <label htmlFor="radio_2">Consignação Ativa</label>   
    <br />
    <input id="radio_3" className="radio_consignacoes" type="radio" name="radio" />
    <label htmlFor="radio_3">Cancelada pelo banco</label>
    <br />
    <input id="radio_4" className="radio_consignacoes" type="radio" name="radio" />
    <label htmlFor="radio_4">Cancelada pelo INSS</label>
    <br />
    <input id="radio_5" className="radio_consignacoes" type="radio" name="radio" />
    <label htmlFor="radio_5">Relatório Completo</label>
    <br />
    <br />
    <input id="radio_6" className="ressalvaConsignacoes" type="radio" name="ressalvas" />
    <label htmlFor="radio_6">Ressalva - Sem Informações Bancárias</label>
    <br />
    <input id="radio_7" className="ressalvaConsignacoes" type="radio" name="ressalvas" />
    <label htmlFor="radio_7">Ressalva - Cadastro de Dependentes</label>
    <br />
    <input id="radio_8" className="ressalvaConsignacoes" type="radio" name="ressalvas" />
    <label htmlFor="radio_8">Ressalva - Área de Atuação do INSS</label>
  </div>
  <div id="consignacoes_div_button">
    <button type="button" onclick="resposta_consignacoes()">Responder</button>
  </div>
  
  <section id="respostas">
    <label htmlFor="assunto_email">Assunto:</label>
    <textarea id="consignacoes_assunto_email" rows={1} cols={75} placeholder="Texto pra ser colado no Assunto do E-mail" defaultValue={""} /><br />
    
    <textarea id="consignacoes_textarea" rows={8} cols={75} placeholder="O texto aparecerá aqui. Utilize o Ctrl + C para copiar"/>
  </section>
  </div>

  )
}

export default Consignacoes;