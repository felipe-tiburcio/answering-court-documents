import React from "react";

function Protocolo(){
  return(
    <form>
        <h3 className="black_subtitles">Protocolo - Solicitante</h3>
        <div className="vinculos_containers"> 
          <label htmlFor="protocolo_sei" className="label_inputs">SEI:</label>
          <input id="protocolo_sei" className="inputs_geral" />
          <br />
          <label htmlFor="vinculos_orgao" className="label_inputs">Órgão:</label>
          <input id="vinculos_orgao" className="inputs_geral" placeholder="TJ / Vara / TRT / outros" /><br />
          <label htmlFor="vinculos_cidade" className="label_inputs">Cidade:</label>
          <input id="vinculos_cidade" className="inputs_geral" placeholder="Cidade" /><br />
          <label htmlFor="vinculos_processo" className="label_inputs">Processo:</label>
          <input id="vinculos_processo" className="inputs_geral" placeholder="Número do Processo" oninput="salvar(this)" /><br />
          <label htmlFor="vinculos_email" className="label_inputs">E-mail:</label>
          <input id="vinculos_email" className="inputs_geral" placeholder="E-mail" /><br />
        </div>
        <h3 className="black_subtitles">Segurado</h3>
        <div id="container_segurado" className="vinculos_containers"> 
          <label htmlFor="vinculos_nome" className="label_inputs">Nome:</label>
          <input id="vinculos_nome" className="inputs_geral" placeholder="Nome Completo" /><br />
          <label htmlFor="vinculos_rg" className="label_inputs">RG:</label>
          <input id="vinculos_rg" className="inputs_geral" placeholder="Número do RG" /><br />
          <label htmlFor="vinculos_cpf" className="label_inputs">CPF:</label>
          <input id="vinculos_cpf" className="inputs_geral" placeholder="Número do CPF" /><br />
          <label htmlFor="vinculos_nascimento" className="label_inputs">Nasc.:</label>
          <input id="vinculos_nascimento" className="inputs_geral" placeholder="xx/xx/xxxx" /><br />
          <label htmlFor="vinculos_mae" className="label_inputs">Mãe:</label>
          <input id="vinculos_mae" className="inputs_geral" placeholder="Nome da Mãe" /><br />
          <label htmlFor="observacoes" className="label_inputs">Obs.:</label>
          <textarea rows={8} cols={50} id="observacoes" placeholder="Anotações diversas" defaultValue={""} />
        </div>
        <br />
        {/*Seleção da situação do vínculo*/}
        <h3 className="black_subtitles">Situação:</h3>
        <div className="radio_protocolo">
          <input id="radio_1" type="radio" name="radio" className="radio_protocolo" />
          <label htmlFor="radio_1">Em andamento</label><br />
          <input id="radio_2" className="radio_protocolo" type="radio" name="radio" />
          <label htmlFor="radio_2">Exigência</label><br />   
          <input id="radio_3" className="radio_protocolo" type="radio" name="radio" />
          <label htmlFor="radio_3">Deferido</label>
          <br />
          <input id="radio_4" className="radio_protocolo" type="radio" name="radio" />
          <label htmlFor="radio_4">Indeferido</label>
          <br />
          <br />
          <input id="radio_6" className="radio_vinculos" type="radio" name="ressalvas" defaultValue={1} />
          <label htmlFor="radio_6">Ressalva1</label>
          <br />
          <input id="radio_7" className="radio_vinculos" type="radio" name="ressalvas" defaultValue={2} />
          <label htmlFor="radio_7">Ressalva2</label>
        </div>
        <div id="vinculos_div_button">
          <button type="button" onclick="resposta_vinculos()">Responder</button>
        </div>
        <section id="respostas">
          <label htmlFor="assunto_email">Assunto:</label>
          <textarea rows={2} cols={75} id="assunto_email" placeholder="Texto pra ser colado no Assunto do E-mail" defaultValue={""} />
          <br />
          <textarea id="vinculos_textarea" rows={8} cols={75} placeholder="O texto aparecerá aqui. Utilize o Ctrl + C para copiar" defaultValue={""} />
        </section>
      </form>
  )
}

export default Protocolo;