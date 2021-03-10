import React from "react";

function Dependentes(){
  return(
    <div>
    <div className="solicitante_container">
      <h4 className="black_subtitles">Dependentes - Solicitante</h4>
      <label htmlFor="dependentes_orgao" className="label_inputs">Órgão:</label>
      <input className="inputs_geral" />
      <br />
      <label htmlFor="dependentes_cidade" className="label_inputs">Cidade:</label>
      <select id="dependentes_cidade" className="inputs_geral">
        <option selected>Aracaju</option>
        <option>Nossa Sra. do Socorro</option>
        <option>São Cristóvão</option>
        <option>Itaporanga</option>
        <option>Carmópolis</option>
        <option>Maruim</option>
        <option>Pirambu</option>
        <option>Barra dos Coqueiros</option>
        <option>Santo Amaro das Brotas</option>
        <option>Outra Cidade</option>
        <option>Outra Cidade</option>
        <option>Outra Cidade</option>
      </select>
      <br />
      <label htmlFor="dependentes_processo" className="label_inputs">Processo:</label>
      <input type="text" id="dependentes_processo" className="inputs_geral" min={0} placeholder="Número do Processo" />
      <br />
      <label htmlFor="dependentes_email" className="label_inputs">E-mail:</label>
      <input id="dependentes_email" className="inputs_geral" placeholder="E-mail" />
    </div> 

<br />
    <div id="dependentes_segurado_container">
      <h4 className="black_subtitles">Segurado</h4>       
      <label htmlFor="dependentes_segurado_nome" className="label_inputs">Nome:</label>
      <input id="dependentes_segurado_nome" className="inputs_geral" placeholder="Nome do Segurado" /><br />
      <label htmlFor="dependentes_segurado_rg" className="label_inputs">RG:</label>
      <input type="text" min={0} id="dependentes_segurado_rg" className="inputs_geral" placeholder="RG com Órgão Emissor e UF" /><br />
      <label htmlFor="dependentes_segurado_cpf" className="label_inputs">CPF:</label>
      <input type="text" min={0} id="dependentes_segurado_cpf" className="inputs_geral" placeholder="Número do CPF" /><br />
      <label htmlFor="dependentes_segurado_data_nascimento" className="label_inputs">Nasc.:</label>
      <input type="text" id="dependentes_segurado_data_nascimento" className="inputs_geral" placeholder="Data de Nascimento" /><br />
      <label htmlFor="dependentes_segurado_mae" className="label_inputs">Mãe:</label>
      <input id="dependentes_segurado_mae" className="inputs_geral" placeholder="Nome da mãe" /><br />
      <label htmlFor="dependentes_segurado_pis" className="label_inputs">NIT/PIS:</label>
      <input type="text" min={0} id="dependentes_segurado_pis" className="inputs_geral" placeholder="NIT/PIS/PASEP" />
      <br />
      <br />
      <label className="label_inputs" id="dependentes_segurado_data_obito">Óbito:</label>
      <input type="text" id="dependentes_segurado_data_obito" className="inputs_geral" placeholder="Data de Óbito" /><br />
      <label htmlFor="dependentes_segurado_certidao_obito" className="label_inputs">Certidão</label>
      <input type="text" id="dependentes_segurado_certidao_obito" className="inputs_geral" placeholder="Certidão de Óbito nº" /><br />
      <label htmlFor="dependentes_segurado_livro" className="label_inputs">Livro:</label>
      <input id="dependentes_segurado_livro" className="inputs_geral" placeholder="A, B ou C" /><br />
      <label htmlFor="dependentes_segurado_folha" className="label_inputs">Folha:</label>
      <input id="dependentes_segurado_folha" className="inputs_geral" placeholder="Folha" /><br />
      <label htmlFor="dependentes_segurado_cartorio" className="label_inputs">Cartório:</label>
      <input id="dependentes_segurado_cartorio" className="inputs_geral" placeholder="Nome do Cartório" /> 
    </div>

    <br />

    <div id>
      <h4 className="black_subtitles">Situação</h4>
      <label htmlFor="segurado_nao_localizado">
        <div id="radio_selection_1" className="radio_selections">
          <input id="segurado_nao_localizado" className="radio" type="radio" name="radio" defaultValue={1} />Segurado não localizado
        </div>
      </label>
      <label htmlFor="segurado_tem_dependentes">
        <div className="radio_selections">   
          <input id="segurado_tem_dependentes" className="radio" type="radio" name="radio" defaultValue={2} />Existem dependentes ativos
        </div>
      </label>
      <label htmlFor="segurado_sem_dependentes">
        <div className="radio_selections">
          <input id="segurado_sem_dependentes" className="radio" type="radio" name="radio" defaultValue={3} />Sem dependentes ativos
        </div>
      </label>
      <label htmlFor="sem_dependentes_certidao">
        <div className="radio_selections">
          <input id="sem_dependentes_certidao" className="radio" type="radio" name="radio" defaultValue={4} />Sem dependentes + Certidão
        </div>
      </label>
      <label htmlFor="houve_dependentes">    
        <div className="radio_selections">
          <input id="houve_dependentes" className="radio" type="radio" name="radio" defaultValue={5} />Já houve dependentes
        </div>
      </label>
      <label htmlFor="com_dependentes_certidao">    
        <div className="radio_selections">
          <input id="com_dependentes_certidao" className="radio" type="radio" name="radio" defaultValue={6} />Com dependentes + Certidão
        </div>
      </label>
      <br/>
    <div>
        <h4 className="black_subtitles">Dependentes</h4>
        <label for="nb1_dependentes" className="label_inputs">NB 1:</label>
        <input type="text" className="inputs_geral" placeholder="Número do Benefício 1" /><br />
        <label for="nb2_dependentes" className="label_inputs">NB 2:</label>
        <input type="text" className="inputs_geral" placeholder="Número do Benefício 2" /><br />
        <label for="nb3_dependentes" className="label_inputs">NB 3:</label>
        <input type="text" className="inputs_geral" placeholder="Número do Benefício 3" /><br />
        <label for="nb4_dependentes" className="label_inputs">NB 4:</label>
        <input type="text" className="inputs_geral" placeholder="Número do Benefício 4" /><br />
    </div>
        <div id="text_area_container">
          <textarea className="dependentes_textarea" cols={75} rows={8} placeholder="Colar os dados do DEPEND do PLENUS" defaultValue={""} />
        </div> 
        
        <div>
          <button type="button" onclick="resposta_dependentes()">Gerar Resposta</button><br />
        </div>

        <div>
        <label for="assunto_email">Assunto:</label>
        <textarea id="dependentes_assunto_email" rows={1} cols={75} placeholder="Texto pra ser colado no Assunto do E-mail" defaultValue={""} /><br />

        <textarea id="dependentes_resposta" className="text_area_resposta" cols={75} rows={6} placeholder="A resposta aparecerá aqui. Use CTRL + A para selecionar toda a resposta, depois CTRL + C e CTRL + V no Expresso."/>
        </div>
        </div>
        </div>
  )
}

export default Dependentes;