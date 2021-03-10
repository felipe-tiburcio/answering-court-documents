import React from "react";

function Residuos(){
  return(
    <form>
    <h4 className="black_subtitles">Resíduos - Solicitante</h4>
    <div>
      <label htmlFor="residuos_orgao" className="label_inputs">Órgão:</label>
      <input className="inputs_geral" />
      <br />
      <label htmlFor="residuos_cidade" className="label_inputs">Cidade:</label>
      <select id="residuos_cidade" className="inputs_geral">
        <option selected>Aracaju</option>
        <option>N. Sra. do Socorro</option>
        <option>Barra dos Coqueiros</option>
        <option>São Cristóvão</option>
        <option>Itaporanga</option>
        <option>Carmópolis</option>
        <option>Maruim</option>
        <option>Riachuelo</option>
        <option>Santo Amaro das Brotas</option>
        <option>Outra Cidade</option>
        <option>Outra Cidade</option>
      </select>
      <br />
      <label htmlFor="residuos_processo" className="label_inputs">Processo:</label>
      <input id="residuos_processo" className="inputs_geral" placeholder="Número do Processo" />
    </div>
    <h4 className="black_subtitles">Segurado</h4>
    <div> 
      <label htmlFor="residuos_nome" className="label_inputs">Nome:</label>
      <input id="residuos_nome" className="inputs_geral" placeholder="Nome Completo" /><br />
      <label htmlFor="residuos_cpf" className="label_inputs">CPF:</label>
      <input id="residuos_cpf" className="inputs_geral" placeholder="CPF" /><br />
      <label htmlFor="residuos_nascimento" className="label_inputs">Nasc.:</label>
      <input id="residuos_nascimento" className="inputs_geral" placeholder="Data de Nascimento" /><br />
      <label htmlFor="residuos_mae" className="label_inputs">Mãe:</label>
      <input id="residuos_mae" className="inputs_geral" placeholder="Nome da Mãe" /><br />
      <label htmlFor="residuos_obito" className="label_inputs">Óbito:</label>
      <select id="dia_obito" className="label_inputs">
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option selected>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
      </select>
      <select id="mes_obito" className="label_inputs">
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option selected>11</option>
        <option>12</option>
      </select>
      <select id="ano_obito" className="label_inputs">
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option selected>2020</option>
        <option>2021</option>
      </select>
      <br />
      <label htmlFor="residuos_beneficio" className="label_inputs">Benefício:</label>
      <input id="residuos_beneficio" className="inputs_geral" placeholder="Número do Benefício" /><br />
      <label htmlFor="residuos_mr" className="label_inputs">MR:</label>
      <input id="residuos_mr" className="inputs_geral" placeholder="R$ XXXX.XX" />
      <br />         
      <br />
      <div id="divCheckbox">
        <p>Meses não recebidos:</p><br />
        <input id="checkbox_01" className="checkboxes" type="checkbox"/>
        <label htmlFor="checkbox_01">01</label>
        <input id="checkbox_02" className="checkboxes" type="checkbox"/>
        <label htmlFor="checkbox_02">02</label>
        <input id="checkbox_03" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_03">03</label>
        <input id="checkbox_04" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_04">04</label>
        <input id="checkbox_05" className="checkboxes" type="checkbox"/>
        <label htmlFor="checkbox_05">05</label>
        <input id="checkbox_06" className="checkboxes" type="checkbox"/> 
        <label htmlFor="checkbox_06">06</label>
        <input id="checkbox_07" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_07">07</label>
        <input id="checkbox_08" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_08">08</label>
        <input id="checkbox_09" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_09">09</label>
        <input id="checkbox_10" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_10">10</label>
        <input id="checkbox_11" className="checkboxes" type="checkbox" />
        <label htmlFor="checkbox_11">11</label>
        <input id="checkbox_12" className="checkboxes" type="checkbox"/>
        <label htmlFor="checkbox_12">12</label>
        <br />
        <br />
        <label htmlFor="valoresIndevidos">Valores Indevidos:</label>
        <input id="valoresIndevidos" /><br />
      </div>
      <br /> 
      <div className>
        <div className>
          <input id="radioNaoEncontrado" type="radio" className="radioResiduos" name="semResiduos" />
          <label htmlFor="radioNaoEncontrado">Segurado não-localizado</label>
          <br />
          <input id="radioSemBeneficio" type="radio" className="radioResiduos" name="semResiduos" />
          <label htmlFor="radioSemBeneficio">Sem Benefício</label>
          <br />
          <input id="radioSemResiduos" type="radio" className="radioResiduos" name="semResiduos" />
          <label htmlFor="radioSemResiduos">Sem Resíduos</label>
          <br />
          <br />
          <input id="radio_13_yes" className="radioResiduos" type="radio" name="13_salario" className="tem13" />
          <label htmlFor="radio_13_yes" className>Benefício com 13º</label><br />   
          <input id="radio_13_no" className="radioResiduos" type="radio" name="13_salario"/>
          <label htmlFor="radio_13_no" className>Não tem 13º</label><br />
        </div>    
        <br />
        <div className>    
          <input type="radio" id="nao_recebeu_13" className="radioResiduos" name="recebeu_13" />
          <label htmlFor="nao_recebeu_13" className>Não recebeu nenhum valor de 13º</label><br />
          <input type="radio" id="recebeu_13" className="radioResiduos" name="recebeu_13" />
          <label htmlFor="recebeu_13" className>Recebeu alguns valores de 13º</label><br />
          <label htmlFor="o13_recebido" className>13º Recebido(R$):</label>
          <input id="o13_recebido" className="radioResiduos" name="13_recebido" />
          <br />
          <br />
        </div>
        <div className>
          <input id="radio_10" type="radio" className="radioRessalvas" name="ressalvas" />
          <label htmlFor="radio_10">Ressalva - Acerto de Contas</label>
          <br />
          <input id="radio_11" className="radioRessalvas" type="radio" name="ressalvas" />
          <label htmlFor="radio_11" className>Ressalva - Cadastro de Dependentes</label>
          <br />
          <input id="radio_12" className="radioRessalvas" type="radio" name="ressalvas" />
          <label htmlFor="radio_12" className>Ressalva - Área de atuação do INSS</label>
          <br />
          <input id="radio_13" className="radioRessalvas" type="radio" name="ressalvas" />
          <label htmlFor="radio_13" className>Ressalva - Sem acesso a dados bancários</label>
          <br />
          <input id="radio_14" className="radioRessalvas" type="radio" name="ressalvas" />
          <label htmlFor="radio_14" className>Ressalva - Encaminhamento para o MOB</label>
          <br />
          <br />
        </div>    
      </div>
      <div className="div_botao">
        <button type="button" onclick="respostaResiduos()">Gerar Resposta</button><br />
      </div>
      <section id="respostas">
        
        <textarea id="residuos_assunto" rows={2} cols={75} placeholder="Texto pra ser colado no Assunto do E-mail" /><br />
        <textarea id="residuos_resposta" rows={25} cols={75} placeholder="A resposta aparecerá aqui. Utilize Ctrl+A para selecionar tudo, Ctrl+C para copiar e Ctrl+V no Expresso."/>
      </section>
    </div>
    </form>
  )
}

export default Residuos;