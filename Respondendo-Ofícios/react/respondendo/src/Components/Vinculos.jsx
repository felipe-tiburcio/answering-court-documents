import React from "react";

export default function Vinculos(){
  return(
    <>
      <h3 class="black_subtitles"
      >Vínculos - Solicitante</h3>
            <div class="container_solicitante" class="vinculos_containers">
              <label for="vinculos_orgao" class="label_inputs">
                Órgão:
              </label>
              <input class="inputs_geral" />
              <br />

              <label for="vinculos_cidade" class="label_inputs">
                Cidade:
              </label>
              <select id="vinculos_cidade" class="inputs_geral">
                <option selected>Aracaju</option>
                <option>N. Sra. do Socorro</option>
                <option>Barra dos Coqueiros</option>
                <option>São Cristóvão</option>
                <option>Itaporanga</option>
                <option>Carmópolis</option>
                <option>Maruim</option>
                <option>Santo Amaro das Brotas</option>
                <option>Pirambu</option>
                <option>Outra Cidade</option>
                <option>Outra Cidade</option>
                <option>Outra Cidade</option>
              </select>

              <br />

              <label for="vinculos_processo" class="label_inputs">
                Processo:
              </label>
              <input
                id="vinculos_processo"
                class="inputs_geral"
                placeholder="Número do Processo"
              />
              <br />

              <label for="vinculos_email" class="label_inputs">
                E-mail:
              </label>
              <input id="vinculos_email" class="inputs_geral" placeholder="E-mail" />
              <br />
            </div>
            <h3 class="black_subtitles">Segurado</h3>
            <div class="container_segurado" class="vinculos_containers">
              <label for="vinculos_nome" class="label_inputs">
                Nome:
              </label>
              <input
                id="vinculos_nome"
                class="inputs_geral"
                placeholder="Nome Completo"
              />
              <br />

              <label for="vinculos_rg" class="label_inputs">
                RG:
              </label>
              <input
                id="vinculos_rg"
                class="inputs_geral"
                placeholder="Número do RG"
              />
              <br />

              <label for="vinculos_cpf" class="label_inputs">
                CPF:
              </label>
              <input
                id="vinculos_cpf"
                class="inputs_geral"
                placeholder="Número do CPF"
              />
              <br />

              <label for="vinculos_nascimento" class="label_inputs">
                Nasc.:
              </label>
              <input
                id="vinculos_nascimento"
                class="inputs_geral"
                placeholder="xx/xx/xxxx"
              />
              <br />

              <label for="vinculos_mae" class="label_inputs">
                Mãe:
              </label>
              <input
                id="vinculos_mae"
                class="inputs_geral"
                placeholder="Nome da Mãe"
              />
              <br />

              <label for="vinculos_endereco" class="label_inputs" id="label_endereco">
                End.:
              </label>
              <textarea
                id="vinculos_endereco"
                class="inputs_geral"
                rows="4"
                cols="70"
                placeholder="Endereço(s) cadastrado(s) no CNIS"
              ></textarea>
            </div>
            <br />
            <h3 class="black_subtitles">Empresa</h3>
            <div id="container_empresa" class="vinculos_containers">
              <label for="vinculos_empresa" class="label_inputs">
                Empresa:
              </label>
              <input
                id="vinculos_empresa"
                placeholder="Nome da Empresa"
                class="inputs_geral"
              />
              <br />

              <label for="vinculos_data_inicio" class="label_inputs">
                Início:
              </label>
              <input
                id="vinculos_data_inicio"
                placeholder="xx/xx/xxxx"
                class="inputs_geral"
              />

              <br />

              <label for="vinculos_salario" class="label_inputs">
                R$:
              </label>
              <input
                id="vinculos_salario"
                placeholder="Última remuneração no CNIS"
                class="inputs_geral"
              />
            </div>
            <br />
            <h3 class="black_subtitles">Benefício</h3>
            <div class="container_beneficio" class="vinculos_containers">
              <label for="vinculos_nb" class="label_inputs">
                NB:
              </label>
              <input
                id="vinculos_nb"
                class="inputs_geral"
                placeholder="Número do Benefício"
              />

              <br />

              <label for="vinculos_tipoBeneficio" class="label_inputs">
                Tipo:
              </label>
              <select id="vinculos_tipoBeneficio" class="inputs_geral">
                <option selected>Pensão por Morte</option>
                <option>Aposentadoria por Idade</option>
                <option>Aposentadoria por Tempo de Contribuição</option>
                <option>Aposentadoria Especial</option>
                <option>Auxílio por Incapacidade Temporária</option>
                <option>Auxílio por Incapacidade Temporária Acidentária</option>
                <option>Amparo Social a Pes. Def.</option>
                <option>Amparo Social ao Idoso</option>
                <option>Outra opção</option>
              </select>

              <br />

              <label for="vinculos_beneficioInicio" class="label_inputs">
                DIB:
              </label>
              <input
                id="vinculos_beneficioInicio"
                placeholder="xx/xx/xxxx"
                class="inputs_geral"
              />

              <br />

              <label for="valorBeneficio" class="label_inputs">
                R$:
              </label>
              <input
                id="valorBeneficio"
                placeholder="MR do benefício no INFBEN"
                class="inputs_geral"
              />
            </div>
            <br />
            //Seleção da situação do vínculo
            <h3 class="black_subtitles">Situação</h3>
            <div class="vinculos_radio">
              <br />
              <input id="radio_1" type="radio" name="radio" class="radio_vinculos" />
              <label for="radio_1">Segurado não localizado</label>
              <hr />
              <br />
              <input
                id="radio_2"
                class="radio_vinculos"
                type="radio"
                name="radio"
                class="radio_vinculos"
              />
              <label for="radio_2">Vínculo ativo</label>

              <br />

              <input
                id="radio_3"
                class="radio_vinculos"
                type="radio"
                name="radio"
                class="radio_vinculos"
              />
              <label for="radio_3">Vínculo e salário</label>

              <br />

              <input
                id="radio_4"
                class="radio_vinculos"
                type="radio"
                name="radio"
                class="radio_vinculos"
              />
              <label for="radio_4">
                Vínculo(s) aberto(s) (Sem remunerações recentes)
              </label>

              <br />

              <input id="radio_5" class="radio_vinculos" type="radio" name="radio" />
              <label for="radio_5">Sem vínculo</label>
              <hr />
              <br />

              <input id="radio_6" class="radio_vinculos" type="radio" name="radio" />
              <label for="radio_6">Benefício ativo</label>

              <br />

              <input id="radio_7" class="radio_vinculos" type="radio" name="radio" />
              <label for="radio_7">Sem benefício ativo</label>
              <hr />
              <br />

              <input
                id="radio_8"
                class="radio_vinculos"
                type="radio"
                name="radio"
                value="5"
              />
              <label for="radio_8">Endereço</label>
              <br />

              <input id="radio_9" class="radio_vinculos" type="radio" name="radio" />
              <label for="radio_9">CNIS completo</label>

              <br />

              <input id="radio_10" class="radio_vinculos" type="radio" name="radio" />
              <label for="radio_10">Dados Cadastrais</label>

              <hr />
              <br />

              <input
                id="radio_10"
                class="radio_vinculos"
                type="radio"
                name="ressalvas"
                value="1"
              />
              <label for="radio_10">Ressalva - Cadastro de Dependentes</label>

              <br />

              <input
                id="radio_11"
                class="radio_vinculos"
                type="radio"
                name="ressalvas"
                value="2"
              />
              <label for="radio_11">Ressalva - Área de atuação do INSS</label>
              <br />
              <hr />
            </div>
            <div class="vinculos_div_button">
              <button type="button">
                Responder
              </button>
            </div>
            <section id="respostas">
              <label for="assunto_email">Assunto:</label>

              <textarea
                id="vinculos_assunto_email"
                rows="1"
                cols="75"
                id="assunto_email"
                placeholder="Texto pra ser colado no Assunto do E-mail"
              ></textarea>
              <br />

              <textarea
                id="vinculos_textarea"
                rows="8"
                cols="75"
                id="vinculos_text_area"
                placeholder="O texto aparecerá aqui. Utilize o Ctrl + C para copiar" 
                ></textarea>
            </section>
          </>
    )
  }
