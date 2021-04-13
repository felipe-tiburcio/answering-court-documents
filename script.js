//Início da página de Vínculos

function resposta_vinculos() {
  let processo = document.querySelector("#vinculos_processo").value;

  let segurado = document.querySelector("#vinculos_nome").value;

  let endereco = document.querySelector("#vinculos_endereco").value;

  let situacao = document.getElementsByClassName("radio_vinculos");

  let empresa = document.querySelector("#vinculos_empresa").value;

  let ultimoSalario = document.querySelector("#vinculos_salario").value;

  let data_inicio = document
    .querySelector("#vinculos_data_inicio")
    .value.split("-")
    .reverse()
    .join("/");

  let beneficio = document.querySelector("#vinculos_tipoBeneficio").value;

  let inicioBeneficio = document
    .querySelector("#vinculos_beneficioInicio")
    .value.split("-")
    .reverse()
    .join("/");

  let valorBeneficio = document.querySelector("#valorBeneficio").value;

  let resposta = document.querySelector("#vinculos_textarea");

  let assunto = document.getElementById("assunto");

  // Variáveis com as respostas para melhor organização

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.`;

  const vinculoAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}.`;

  const vinculoSalario = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}, e seu último salário informado pelo empregador foi R$ ${ultimoSalario}.`;

  const vinculoDuvida = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo(s) em aberto, no entanto, não existem dados atuais informados pela(s) empresa(s) sobre a remuneração recebida, o que gera dúvida quanto à manutenção deste(s) vínculo(s).`;

  const semVinculo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo ativo atual no cadastro do(a) segurado(a) ${segurado}.`;

  const beneficioAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} recebe benefício de ${beneficio} desde ${inicioBeneficio} com o valor bruto de R$ ${valorBeneficio}.`;

  const semBeneficio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício ativo no cadastro do(a) segurado(a) ${segurado}.`;

  const informarEndereco = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta(m) o(s) seguinte(s) endereço(s) do segurado ${segurado}: 

${endereco}`;

  const cnisCompleto = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando o relatório completo do CNIS. Neste documento é possível analisar o histórico completo de vínculos e remunerações do(a) segurado(a) ${segurado}.`;

  const cnisVazio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo ou contribuição no CNIS do(a) segurado(a) ${segurado}.`;

  const dadosCadastrais = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar os dados cadastrais do(a) segurado(a) ${segurado}.`;

  const ressalvaDependentes = `\n\nImportante ressaltar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const escopoInss = `\n\nImportante ressaltar que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.`;

  const atenciosamente = `\n\nAtenciosamente,
  `;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${segurado}`;

  //Lógica com as ressalvas sendo lidas primeiro para mudar a posição do "Atenciosamente".

  if (situacao[11].checked) {
    if (situacao[0].checked) {
      resposta.innerHTML = naoLocalizado;
    } else if (situacao[1].checked) {
      resposta.innerHTML = vinculoAtivo;
    } else if (situacao[2].checked) {
      resposta.innerHTML = vinculoSalario;
    } else if (situacao[3].checked) {
      resposta.innerHTML = vinculoDuvida;
    } else if (situacao[4].checked) {
      resposta.innerHTML = semVinculo;
    } else if (situacao[5].checked) {
      resposta.innerHTML = beneficioAtivo;
    } else if (situacao[6].checked) {
      resposta.innerHTML = semBeneficio;
    } else if (situacao[7].checked) {
      resposta.innerHTML = informarEndereco;
    } else if (situacao[8].checked) {
      resposta.innerHTML = cnisCompleto;
    } else if (situacao[9].checked) {
      resposta.innerHTML = cnisVazio;
    } else if (situacao[10].checked) {
      resposta.innerHTML = dadosCadastrais;
    }

    resposta.innerHTML += ressalvaDependentes + atenciosamente;
  } else if (situacao[12].checked) {
    if (situacao[0].checked) {
      resposta.innerHTML = naoLocalizado;
    } else if (situacao[1].checked) {
      resposta.innerHTML = vinculoAtivo;
    } else if (situacao[2].checked) {
      resposta.innerHTML = vinculoSalario;
    } else if (situacao[3].checked) {
      resposta.innerHTML = vinculoDuvida;
    } else if (situacao[4].checked) {
      resposta.innerHTML = semVinculo;
    } else if (situacao[5].checked) {
      resposta.innerHTML = beneficioAtivo;
    } else if (situacao[6].checked) {
      resposta.innerHTML = semBeneficio;
    } else if (situacao[7].checked) {
      resposta.innerHTML = informarEndereco;
    } else if (situacao[8].checked) {
      resposta.innerHTML = cnisCompleto;
    } else if (situacao[9].checked) {
      resposta.innerHTML = cnisVazio;
    } else if (situacao[10].checked) {
      resposta.innerHTML = dadosCadastrais;
    }

    resposta.innerHTML += escopoInss + atenciosamente;
  } else {
    if (situacao[0].checked) {
      resposta.innerHTML = naoLocalizado + atenciosamente;
    } else if (situacao[1].checked) {
      resposta.innerHTML = vinculoAtivo + atenciosamente;
    } else if (situacao[2].checked) {
      resposta.innerHTML = vinculoSalario + atenciosamente;
    } else if (situacao[3].checked) {
      resposta.innerHTML = vinculoDuvida + atenciosamente;
    } else if (situacao[4].checked) {
      resposta.innerHTML = semVinculo + atenciosamente;
    } else if (situacao[5].checked) {
      resposta.innerHTML = beneficioAtivo + atenciosamente;
    } else if (situacao[6].checked) {
      resposta.innerHTML = semBeneficio + atenciosamente;
    } else if (situacao[7].checked) {
      resposta.innerHTML = informarEndereco + atenciosamente;
    } else if (situacao[8].checked) {
      resposta.innerHTML = cnisCompleto + atenciosamente;
    } else if (situacao[9].checked) {
      resposta.innerHTML = cnisVazio + atenciosamente;
    } else if (situacao.checked) {
      resposta.innerHTML = dadosCadastrais + atenciosamente;
    }
  }
}

//Final da página de Vínculos

// Início da página de Dependentes

function resposta_dependentes() {
  const processo = document.querySelector("#dependentes_processo").value;

  const segurado = document.querySelector("#dependentes_segurado_nome").value;

  const situacao = document.getElementsByClassName("radio");

  const resposta = document.getElementById("dependentes_resposta");

  const assunto = document.getElementById("assunto_email");

  const dependentes = document.querySelector(".dependentes_textarea").value;

  //Variáveis com as respostas pra melhor organização

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.
  
Atenciosamente,
`;

  const temDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), sendo ele(s):
        
  ${dependentes}
  
Atenciosamente,
`;

  const semDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS).
  
Atenciosamente,
`;

  const semDependentesCertidao = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS), motivo pelo qual estamos encaminhando a Certidão de Inexistência de Dependentes, conforme solicitação.

Atenciosamente,
`;

  const tinhamDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que, embora no momento atual não tenham sido localizados dependentes com benefício ativo do(a) Sr.(a) ${segurado} como instituidor(a), foram reconhecidos anteriormente como dependentes:
        
  ${dependentes}
  
Atenciosamente,
`;

  const dependentesCertidao = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), motivo pelo qual encaminhamos a Certidão de PIS/PASEP/FGTS conforme solicitação.

Atenciosamente,
`;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${segurado}`;

  if (situacao[0].checked) {
    resposta.value = naoLocalizado;
  } else if (situacao[1].checked) {
    resposta.value = temDependentes;
  } else if (situacao[2].checked) {
    resposta.value = semDependentes;
  } else if (situacao[3].checked) {
    resposta.value = semDependentesCertidao;
  } else if (situacao[4].checked) {
    resposta.value = tinhamDependentes;
  } else if (situacao[5].checked) {
    resposta.value = dependentesCertidao;
  }
}

// Final da página de Dependentes

//Início da página de Resíduos

function respostaResiduos() {
  const nome = document.querySelector("#residuos_nome").value;

  const processo = document.querySelector("#residuos_processo").value;

  const situacao = document.querySelectorAll(".radioResiduos");

  const mr = Number(document.querySelector("#residuos_mr").value);

  const valorDia = mr / 30;

  const dataFormatada = document
    .querySelector("#dataObito")
    .value.split("-")
    .reverse()
    .join("/");

  //Trecho com substring pra quebrar a string e gerar números para cálculos

  let diaObito = Number(dataFormatada.substring(0, 2));

  if (diaObito == 31) {
    diaObito = 30;
  }

  let mesObito = Number(dataFormatada.substring(3, 5));

  const anoObito = dataFormatada.substring(6, 10);

  let proporcionalDias = valorDia * diaObito;

  const mesesCheckbox = document.querySelectorAll(".checkboxes");

  let qtdMesesSelecionados = 0;

  let competenciasSelecionadas = [];

  for (let i = 0; i < mesesCheckbox.length; i++) {
    if (mesesCheckbox[i].checked) {
      qtdMesesSelecionados += 1;
      competenciasSelecionadas.push(mesesCheckbox[i].value);
    }
  }

  if (competenciasSelecionadas == "") {
    proporcionalDias = 0;
  }

  let valoresIndevidos = Number(
    document.querySelector("#valoresIndevidos").value
  );

  const situacao13 = document.querySelectorAll(".situacao13");

  let _13jaRecebido = Number(document.querySelector("#_13_recebido").value);

  let proporcional13 = Number((mr / 12) * mesObito);

  if (diaObito < 15) {
    mesObito -= 1;
    proporcional13 = Number((mr / 12) * mesObito);
  }

  if (situacao13[1].checked) {
    proporcional13 = 0;
  }

  const valorTotalCom13 =
    proporcionalDias + proporcional13 - (_13jaRecebido + valoresIndevidos);

  const valorTotalSem13 = proporcionalDias - valoresIndevidos;

  const assunto = document.querySelector("#residuos_assunto");

  let resposta = document.querySelector("#residuos_resposta");

  const ressalvas = document.getElementsByClassName("radioRessalvas");

  //Respostas em variáveis para melhor organização do código

  const respostaCalculosCom13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação:

- Valor integral do Benefício: R$ ${mr.toFixed(2)}
- Data do Óbito: ${dataFormatada}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias.toFixed(2)}
- 13º proporcional a ${mesObito} meses(Períodos com pelo menos 15 dias): R$ ${proporcional13.toFixed(
    2
  )}
- 13º já recebido: R$ ${_13jaRecebido.toFixed(2)}
- 13º pendente: R$ ${(proporcional13 - _13jaRecebido).toFixed(2)}
- Valores a devolver: R$ ${valoresIndevidos.toFixed(2)}
- Total de Resíduos: R$ ${valorTotalCom13.toFixed(2)}

Estes valores serão recalculados e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado pelos interessados.`;

  const respostaCalculosSem13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação:
  
- Valor integral do Benefício: R$ ${mr.toFixed(2)}
- Data do Óbito: ${dataFormatada}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias.toFixed(2)}
- 13º: Benefício sem 13º salário.
- Valores a devolver: R$ ${valoresIndevidos.toFixed(2)}
- Total de Resíduos: R$ ${valorTotalSem13.toFixed(2)}

Estes valores serão recalculados e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado pelos interessados.`;

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado o cadastro do(a) segurado(a) ${nome} com base nos dados informados.`;

  const semBeneficio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício no cadastro do(a) Sr.(a) ${nome}, inexistindo assim, resíduos pendentes de pagamento por parte do INSS.`;

  const semResiduos = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}.`;

  var acertoContas = `\n\nNeste caso, embora existam resíduos a serem pagos, também existem valores pagos indevidamente, o que acarretará na realização de acerto de contas quando o requerimento dos valores for realizado pelos interessados.`;

  const cadastroDependentes = `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const escopoInss = `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.`;

  const dadosBancarios = `\n\nImportante salientar que o INSS realiza a concessão e administração de benefícios através de sistemas próprios e não tem acesso aos dados bancários/financeiros do segurado, cabendo ao agente bancário esta competência.`;

  const mob = `\n\nNeste caso, como houve recebimento pós-óbito, o processo será encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração das competências e valores recebidos após o óbito do segurado.`;

  const atenciosamente = `\n\nAtenciosamente,`;

  assunto.value = `Ofício - Processo ${processo} - ${nome}`;

  //Se a situação dos resíduos for normal, verificam-se as ressalvas e sem tem 13º.
  if (situacao[0].checked) {
    
    //Seleção das ressalvas
    if (ressalvas[0].checked) {
      situacao13[0].checked ? resposta.value = respostaCalculosCom13 + atenciosamente : resposta.value = respostaCalculosSem13 + atenciosamente;
    }

    if (ressalvas[1].checked) {
        situacao13[0].checked ? resposta.value = respostaCalculosCom13 + acertoContas + atenciosamente : resposta.value = respostaCalculosSem13 + acertoContas + atenciosamente;
    } 
    
    if (ressalvas[2].checked) {
        situacao13[0].checked ? resposta.value = respostaCalculosCom13 + cadastroDependentes + atenciosamente : resposta.value = respostaCalculosSem13 + cadastroDependentes + atenciosamente;
    }

    if (ressalvas[3].checked) {
        situacao13[0].checked ? resposta.value = respostaCalculosCom13 + escopoInss + atenciosamente : resposta.value =          respostaCalculosSem13 + escopoInss + atenciosamente;
    } 
    
    if (ressalvas[4].checked) {
        situacao13[0].checked ? resposta.value = respostaCalculosCom13 + dadosBancarios + atenciosamente : resposta.value =           respostaCalculosSem13 + dadosBancarios + atenciosamente;
    } 
    
    if (ressalvas[5].checked) {
        situacao13[0].checked ? resposta.value = respostaCalculosCom13 + mob + atenciosamente : resposta.value = respostaCalculosSem13 + mob + atenciosamente;
    }

  //Situações em que não tem resíduos. Diferente do estado "normal".    
  } else if (situacao[1].checked) {
      resposta.value = naoLocalizado + atenciosamente;

  } else if (situacao[2].checked) {
      resposta.value = semBeneficio + atenciosamente;
      
  } else if (situacao[3].checked) {
      resposta.value = semResiduos + atenciosamente;
  }
}

// Final da página de Resíduos

// Início da página de Consignações

function resposta_consignacoes() {
  let processo = document.querySelector("#consignacoes_processo").value;

  let segurado = document.querySelector("#consignacoes_nome").value;

  // let consignacoes = document.querySelector("#situacaoConsignacao").value;

  let situacao = document.getElementsByClassName("radio_consignacoes");

  let ressalva = document.getElementsByClassName("ressalvaConsignacoes");

  let resposta = document.querySelector("#consignacoes_textarea");

  let assunto = document.getElementById("consignacoes_assunto_email");

  assunto.innerHTML = `Ofício - Processo ${processo} - ${segurado}`;

  if (situacao[0].checked) {
    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.

Atenciosamente,
      `;
  } else if (situacao[1].checked) {
    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar a seguinte situação referente os contratos efetuados entre o segurado ${segurado} e o(s) agente(s) financeiro(s): 

           
Atenciosamente,
      `;
  } else if (situacao[2].checked) {
    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o agente financeiro efetuou a exclusão da consignação no benefício do segurado ${segurado}. 
    
      
Atenciosamente,
      `;
  } else if (situacao[3].checked) {
    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o INSS efetuou a suspensão da consignação conforme determinação.
    

Atenciosamente,

    `;
  } else if (situacao[4].checked) {
    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível analisar o histórico completo de consignações efetuadas pelos agentes financeiros no cadastro do segurado(a) ${segurado}.

Atenciosamente,

   `;
  } else if (ressalva[0].checked) {
    resposta.innerHTML += `\n\nRessaltamos que o INSS trata da concessão e manutenção de benefícios previdenciários, não dispondo assim dos detalhes contratuais firmados entre o segurado e o agente bancário responsável pela consignação. 
            
      Atenciosamente,
            `;
  } else if (ressalva[1].checked) {
    resposta.innerHTML += `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.

    Atenciosamente,
          `;
  } else if (ressalva[2].checked) {
    resposta.innerHTML += `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.
            
      Atenciosamente,
            `;
  }
}

//Final da página de Consignações

//Início da página de Pensão Alimentícia

function respostaPA() {
  const processo = document.querySelector("#pa_processo").value;

  const instituidor = document.querySelector("#nome_inst").value;

  const dependente1 = document.querySelector("#nome_dep_1").value;

  const tarefa = document.querySelector("#pa_tarefa").value;

  const situacao = document.getElementsByClassName("radio_pa");

  const nbImplantado = document.querySelector("#pa_nbImplantado").value;

  //variáveis relacionadas à parte das respostas
  const resposta = document.getElementById("pa_textarea");

  const assunto = document.getElementById("pa_assunto_email");

  const atenciosamente = `Atenciosamente, 
  `;

  //Frases em variáveis para melhor organização;

  const faltaCpfTitular = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que não foi possível realizar a abertura da tarefa para implantação da referida Pensão Alimentícia no benefício do instituidor ${instituidor}, tendo em vista que é obrigatório informar o número de CPF do titular ${dependente1}. 
  
Sendo assim, solicitamos que, se possível, este dado seja enviado para este e-mail para que a presente demanda possa ser cumprida de forma mais célere. \n\n${atenciosamente}`;

  const faltaOutraCoisa = `Falta outra coisa`;

  const faltaOutraOutraCoisa = `Falta outra outra coisa`;

  const ddb = document.querySelector("#pa_ddb").value;

  const tarefaAberta = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que foi aberta a tarefa de nº ${tarefa} para implantação da referida Pensão Alimentícia. O andamento deste protocolo poderá ser acompanhado pelo(s) interessado(s) através do site gov.br/inss, do aplicativo 'Meu INSS' ou através do telefone 135.`;

  const paJaImplantada = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que a referida Pensão Alimentícia no benefício do instituidor ${instituidor} foi implantada sob o número ${nbImplantado} desde ${ddb} conforme informações constantes no relatório anexo. \n\n${atenciosamente}`;

  const implantadaAgora = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que a referida Pensão Alimentícia foi implantada agora...`;

  const outraSituacao = `Outra situação`;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${instituidor}`;

  // Fim das frases - Início dos radios inputs

  if (situacao[0].checked) {
    resposta.innerHTML = faltaCpfTitular;
  } else if (situacao[1].checked) {
    resposta.innerHTML = faltaOutraCoisa;
  } else if (situacao[2].checked) {
    resposta.innerHTML = faltaOutraOutraCoisa;
  } else if (situacao[3].checked) {
    resposta.innerHTML = tarefaAberta;
  } else if (situacao[4].checked) {
    resposta.innerHTML = paJaImplantada;
  } else if (situacao[5].checked) {
    resposta.innerHTML = implantadaAgora;
  } else if (situacao[6].checked) {
    resposta.innerHTML = outraSituacao;
  }

  // Fim dos radio inputs
}

//Final da página de P.A

//Início do Script de Mandado de Segurança

function resposta_ms() {
  const nome = document.querySelector("#ms_nome").value;

  const beneficio = document.querySelector("#ms_nb").value;

  const situacao = document.getElementsByClassName("radio_ms");

  const dataAgendamento = document
    .getElementById("ms_agendamento")
    .value.split("-")
    .reverse()
    .join("/");

  const horaAgendamento = document.querySelector("#ms_horario").value;

  const aps = document.querySelector("#ms_aps").value;

  const resposta = document.querySelector("#ms_textarea");

  //Respostas em variáveis para melhor organização

  const erroPP = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que não conseguiu realizar o agendamento de Perícia de Prorrogação dentro do prazo e teve seu benefício nº ${beneficio} indevidamente cessado. 
    
2. Situação resolvida e perícia agendada para o dia ${dataAgendamento} às ${horaAgendamento} na ${aps}.
    
3. O benefício foi reativado e já consta o cálculo dos pagamentos pendentes conforme relatório anexo.`;

  const finalizarAnalise = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança determinando a finalização da análise do benefício 7090285392 em até 30 dias após o cumprimento das exigências por parte do(a) segurado(a) Eliana dos Santos Franca.  

2. A exigência solicitava atualização no Cadúnico, além de outros documentos complementares, e foi realizada em 21/11/2020.

3. Em 15/01/2021 o procurador do(a) segurado(a) fez um pedido de dilação do prazo da exigência.

4. Em 02/03/2021 o requerimento foi indeferido, tendo em vista que não houve manifestação do(a) segurado(a) referente o cumprimento da exigência pendente há mais de 100 dias.

5. Importante ressaltar a ciência do(a) segurado(a) e/ou seu procurador, tendo em vista os constantes acessos ao processo digital registrados no sistema GET.`;

  const informacoesDossie = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} e que determina a notificação do INSS para que sejam apresentadas informações que entender necessárias.

2. Sem mais a acrescentar, encaminhamos relatório anexo com consultas diversas aos sistemas do INSS referente a situação relatada.`;

  const analiseMedica = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. É possível verificar através de relatório anexo que a análise médica da Perícia Médica Federal foi de cessação imediata do benefício. 
    
3. Nestes casos em que a data de cessação é a própria data da perícia, não é possível agendar prorrogação.

4. Com a cessação do benefício, o segurado tem prazo de 30 dias de prazo para entrar com Recurso Administrativo contra a decisão e/ou terá que aguardar 30 dias para realizar um novo requerimento de benefício.`;

  const bpcDemora = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. É possível verificar através de relatório anexo que o processo de análise do benefício está em andamento e foi agendada a Avaliação Social para o dia ${dataAgendamento} às ${horaAgendamento} a ser realizada na ${aps}. 

3. Existe o registro no processo, que devido à falta de vagas, não foi possível marcar a Perícia Médica para o mesmo dia da Avaliação Social. Por isso o servidor orienta que seja solicitado ao Assistente Social, no dia da Avaliação Social, para que seja feito o agendamento de Perícia Médica do(a) segurado(a).`;

  const outraSituacao = `Outra situação`;

  //Fim das frases - começo da lógica

  if (situacao[0].checked) {
    resposta.value = erroPP;
  } else if (situacao[1].checked) {
    resposta.value = finalizarAnalise;
  } else if (situacao[2].checked) {
    resposta.value = informacoesDossie;
  } else if (situacao[3].checked) {
    resposta.value = analiseMedica;
  } else if (situacao[4].checked) {
    resposta.value = bpcDemora;
  } else if (situacao[5].checked) {
    resposta.value = outraSituacao;
  }
}

//Final de Mandado de Segurança

//Início da página de Protocolo

function resposta_protocolo() {
  const processo = document.querySelector("#protocolo_processo").value;

  const nome = document.querySelector("#protocolo_nome").value;

  const radios = document.querySelectorAll(".radio_protocolo");

  //Variáveis com os textos das respostas
  const resposta_dossie = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando cópia/dossiê relativo ao segurado ${nome} conforme determinação.`;

  const resposta_em_andamento = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em andamento.`;

  const resposta_exigencia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em exigência.`;

  const resposta_deferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi deferido.`;

  const resposta_indeferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi indeferido.`;

  const ressalva1 = `\n\nImportante ressaltar que esta é a ressalva 1.`;

  const ressalva2 = `\n\nImportante ressaltar que esta é a ressalva 2.`;

  const assunto = document.querySelector("#assunto_email");

  assunto.innerHTML = `Ofício - Processo ${processo} - ${nome}`;

  const textarea = document.querySelector("#protocolo_textarea");

  if (radios[1].checked) {
    textarea.innerHTML = resposta_dossie;
  } else if (radios[2].checked) {
    textarea.innerHTML = resposta_em_andamento;
  } else if (radios[3].checked) {
    textarea.innerHTML = resposta_exigencia;
  } else if (radios[4].checked) {
    textarea.innerHTML = resposta_deferido;
  } else if (radios[5].checked) {
    textarea.innerHTML = resposta_indeferido;
  }

  if (radios[6].checked) {
    textarea.innerHTML += ressalva1;
  } else if (radios[7].checked) {
    textarea.innerHTML += ressalva2;
  }
}

// Fim da página de Procotolo
