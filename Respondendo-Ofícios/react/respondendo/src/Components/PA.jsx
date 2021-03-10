import React from "react";

function PA(){
  return(
    <form>
    <h3 className="black_subtitles">Pensão Alimentícia - Solicitante</h3>
    <div id="container_solicitante" className="pa_containers">
      <label htmlFor="pa_sei" className="label_inputs">SEI:</label>
      <input id="pa_sei" className="inputs_geral" />
      <br />
      <label htmlFor="orgao" className="label_inputs">Órgão:</label>
      <input id="orgao" className="inputs_geral" placeholder="Órgão" /><br />
      <label htmlFor="cidade" className="label_inputs">Cidade:</label>
      <input id="cidade" className="inputs_geral" placeholder="Cidade" /><br />
      <label htmlFor="PA_processo" className="label_inputs">Nº do Processo:</label>
      <input id="PA_processo" className="inputs_geral" placeholder="Número do Processo" /><br />
      <label htmlFor="email" className="label_inputs">E-mail:</label>
      <input id="email" className="inputs_geral" placeholder="E-mail" />
    </div>
    <h3 className="black_subtitles">Instituidor</h3>
    <div id="container_inst" className="pa_containers">
      <label htmlFor="PA_segurado_nome" className="label_inputs">Nome:</label> 
      <input id="PA_segurado_nome" className="inputs_geral" placeholder="Nome Completo" /><br />
      <label htmlFor="cpf_inst" className="label_inputs">CPF:</label> 
      <input id="cpf_inst" className="inputs_geral" placeholder="Número do CPF" />
      <br />
      <br />
      <input type="checkbox" id={13} defaultChecked className="radio" />
      <label htmlFor={13} className="pa_checked">13º salário</label>
      <input type="checkbox" id="sf" className="radio" placeholder="Salário Família?" />
      <label htmlFor="sf" className="pa_checked">Salário Família</label>
    </div>
    <h3 className="black_subtitles">Dependentes</h3>
    <div id="container_titular" className="pa_containers"> 
      <label htmlFor="nome_dependente_1" className="label_inputs">Nome:</label> 
      <input id="nome_dependente_1" placeholder="Dependente 1" className="inputs_geral" />
      <br />
      <label htmlFor="rg_dependente_1" className="label_inputs">RG:</label>
      <input id="rg_dependente_1" placeholder="RG" className="inputs_geral" />
      <br />
      <label htmlFor="cpf_dependente_1" className="label_inputs">CPF:</label> 
      <input id="cpf_dependente_1" placeholder="CPF" className="inputs_geral" />
      <br />
      <label htmlFor="nome_dependente_2" className="label_inputs">Nome:</label> 
      <input id="nome_dependente_2" placeholder="Dependente 2" className="inputs_geral" />
      <br />
      <label htmlFor="rg_dependente_2" className="label_inputs">RG:</label>
      <input id="rg_dependente_2" placeholder="RG" className="inputs_geral" />
      <br />
      <label htmlFor="cpf_dependente_2" className="label_inputs">CPF:</label> 
      <input id="cpf_dependente_2" placeholder="CPF" className="inputs_geral" />
      <br />
      <label htmlFor="nome_dependente_3" className="label_inputs">Nome:</label> 
      <input id="nome_dependente_3" placeholder="Dependente 3" className="inputs_geral" />
      <br />
      <label htmlFor="rg_dependente_3" className="label_inputs">RG:</label>
      <input id="rg_dependente_3" placeholder="RG" className="inputs_geral" />
      <br />
      <label htmlFor="cpf_dependente_3" className="label_inputs">CPF:</label> 
      <input id="cpf_dependente_3" placeholder="CPF" className="inputs_geral" />
    </div>
    <h3 className="black_subtitles">Representante Legal</h3>
    <div id="container_rl" className="pa_containers"> 
      <label htmlFor="rl" className="label_inputs">Nome:</label> 
      <input id="rl" placeholder="Representante Legal" className="inputs_geral" />
      <br />
      <label htmlFor="cpf_rl" className="label_inputs">CPF:</label> 
      <input id="cpf_rl" placeholder="Número do CPF" className="inputs_geral" />
    </div>
    <h3 className="black_subtitles">Dados Bancários</h3>
    <div id="container_dados_bancarios" className="pa_containers"> 
      <label htmlFor="tipo_conta" className="label_inputs">Tipo:</label>
      <select id="tipo_conta" className="inputs_geral">
        <option>Conta-Corrente</option>
        <option>Poupança</option>
        <option>Conjunta</option>
        <option>Salário</option>
        <option>Outra</option>
      </select>
      <br />
      <label htmlFor="numero_conta" className="label_inputs">Número:</label> 
      <input id="numero_conta" placeholder="Número da Conta" className="inputs_geral" />
      <br />
      <label htmlFor="ag" className="label_inputs">Agência:</label> 
      <input id="ag" placeholder="Agência" className="inputs_geral" />
      <br />
      <label htmlFor="banco" className="label_inputs">Banco:</label> 
      <input id="banco" placeholder="Nome do Banco" className="inputs_geral" />
      <br />
      <br />
      <label htmlFor="tarefa" className="label_inputs">Tarefa:</label> 
      <input id="tarefa" placeholder="Protocolo da Tarefa Aberta no GET" className="inputs_geral" />
      <br />
      <button type="button" onclick="respostaPA()">Responder</button>
    </div>
    <section id="respostas">
      <label htmlFor="vinculos_assunto_email">Assunto:</label>
      <textarea id="vinculos_assunto_email" rows={2} cols={75} placeholder="Texto pra ser colado no Assunto do E-mail" defaultValue={""} /><br />
      <label htmlFor="vinculos_textarea">Resposta:</label>  
      <textarea id="vinculos_textarea" rows={10} cols={75} placeholder="O texto aparecerá aqui. Utilize o Ctrl + C para copiar" defaultValue={""} />
    </section>
    <footer id="geral_footer">
      ©Felipe Tiburcio - 2020
    </footer>
  </form>
  )
}

export default PA;