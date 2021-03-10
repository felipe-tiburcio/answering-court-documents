import React from "react";

function MS(){
  return(
    <form>
  <h3 className="black_subtitles">Mandado de Segurança - Dados</h3>
  <label htmlFor="ms_data" className="label_inputs">Data:</label>
  <input id="ms_data" type="date" className="inputs_geral" />
  <br />
  <label htmlFor="ms_prazo" className="label_inputs">Prazo:</label>
  <input id="ms_prazo" className="inputs_geral" />
  <br />
  <label htmlFor="ms_protocolo" className="label_inputs">Protocolo:</label>
  <input id="ms_protocolo" className="inputs_geral" placeholder="Número do Protocolo" />
  <br />
  <label htmlFor="ms_nb" className="label_inputs">NB:</label>
  <input id="ms_nb" type="text" className="inputs_geral" />
  <br />
  <label htmlFor="ms_der" className="label_inputs">DER:</label>
  <input id="ms_der" type="date" className="inputs_geral" />
  <br />
  <h3 className="black_subtitles">Segurado</h3>
  <div id="container_segurado" className="vinculos_containers"> 
    <label htmlFor="vinculos_nome" className="label_inputs">Nome:</label>
    <input id="vinculos_nome" className="inputs_geral" placeholder="Nome Completo" />
    <br />
    <label htmlFor="vinculos_cpf" className="label_inputs">CPF:</label>
    <input id="vinculos_cpf" className="inputs_geral" placeholder="Número do CPF" />
    <br />
    <label htmlFor="vinculos_rg" className="label_inputs">RG:</label>
    <input id="vinculos_rg" className="inputs_geral" placeholder="Número do RG" />
    <br />
    <label htmlFor="ms_nit" className="label_inputs">NIT:</label>
    <input id="ms_nit" className="inputs_geral" placeholder="Número de Inscrição do Trabalhador" />
    <br />
    <label htmlFor="vinculos_endereco" className="label_inputs" id="label_endereco">Situação:</label>
    <textarea id="vinculos_endereco" className="inputs_geral" rows={15} cols={70} placeholder="Notas e relato da situação" defaultValue={""} />
  </div>
  <br />
  {/*Seleção da situação do vínculo*/}
  <h3 className="black_subtitles">Respostas</h3>
  <div className="vinculos_radio">
    <input id="radio_1" type="radio" name="radio" className="radio_vinculos" />
    <label htmlFor="radio_1">Segurado não localizado</label><br />
    <input id="radio_2" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_2">Informar vínculo ativo</label>   
    <br />
    <input id="radio_3" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_3">Informar vínculo e salário</label>   
    <br />
    <input id="radio_4" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_4">Vínculo aberto (Sem remunerações recentes)</label>
    <br />
    <input id="radio_5" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_5">Sem vínculo</label>
    <br />
    <input id="radio_6" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_6">Benefício ativo</label>
    <br />
    <input id="radio_7" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_7">Sem benefício ativo</label>
    <br />
    <input id="radio_8" className="radio_vinculos" type="radio" name="radio" defaultValue={5} />
    <label htmlFor="radio_8">Informar Endereço</label>
    <br />
    <input id="radio_9" className="radio_vinculos" type="radio" name="radio" />
    <label htmlFor="radio_9">Extrato CNIS completo</label>
    <br />
    <br />
    <input id="radio_10" className="radio_vinculos" type="radio" name="ressalvas" defaultValue={1} />
    <label htmlFor="radio_10">Ressalva - Cadastro de Dependentes</label>
    <br />
    <input id="radio_11" className="radio_vinculos" type="radio" name="ressalvas" defaultValue={2} />
    <label htmlFor="radio_11">Ressalva - Área de atuação do INSS</label>
  </div>
  <div id="vinculos_div_button">
    <button type="button" onclick="resposta_vinculos()">Responder</button>
  </div>
  <section id="respostas">
    <label htmlFor="assunto_email">Assunto:</label>
    <textarea id="vinculos_assunto_email" rows={1} cols={75} placeholder="Texto pra ser colado no Assunto do E-mail" defaultValue={""} /><br />
    <textarea id="vinculos_textarea" rows={8} cols={75} placeholder="O texto aparecerá aqui. Utilize o Ctrl + C para copiar" defaultValue={""} />
  </section>
  <footer className="geral_footer">
    ©Felipe Tiburcio - 2020
  </footer>
    </form>

    
  )
}

export default MS;