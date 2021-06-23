//Funções para salvar, carregar e limpar os campos.
const saveFunction = () => {
  const confirmation = confirm("Deseja salvar os dados na memória local?");
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.
    const orgao = document.querySelector("#residuos_orgao").value;

    const processo = document.querySelector("#residuos_processo").value;

    const email = document.querySelector("#residuos_email").value;

    let assunto = document.querySelectorAll("input[type='checkbox']");

    let selection = [];

    for (let i of assunto) {
      selection.push(i.checked);
    }

    const segurado = document.querySelector("#residuos_nome").value;

    const cpf = document.querySelector("#residuos_cpf").value;

    const mae = document.querySelector("#residuos_mae").value;

    const rg = document.querySelector("#residuos_rg").value;

    const nascimento = document.querySelector("#residuos_nascimento").value;
    // .value.split("-")
    // .reverse()
    // .join("/");

    const endereco = document.querySelector("#residuos_endereco").value;

    const empresa = document.querySelector("#residuos_empresa").value;

    const inicioEmpresa = document.querySelector("#residuos_data_inicio").value;

    const ultimoSalario = document.querySelector("#residuos_salario").value;

    const data_inicio = document
      .querySelector("#residuos_data_inicio")
      .value.split("-")
      .reverse()
      .join("/");

    const nb = document.querySelector("#residuos_nb").value;

    const tipoBeneficio = document.querySelector(
      "#residuos_tipoBeneficio"
    ).value;

    const inicioBeneficio = document.querySelector(
      "#residuos_beneficioInicio"
    ).value;

    const valorBeneficio = document.querySelector("#valorBeneficio").value;

    //Parte que salva as variáveis
    localStorage.setItem("Órgão", orgao);
    localStorage.setItem("Processo", processo);
    localStorage.setItem("E-mail", email);

    localStorage.setItem("Assunto", selection);

    localStorage.setItem("Nome", segurado);
    localStorage.setItem("CPF", cpf);
    localStorage.setItem("Mãe", mae);
    localStorage.setItem("RG", rg);
    localStorage.setItem("Nasc.", nascimento);
    localStorage.setItem("End.", endereco);

    localStorage.setItem("Empresa", empresa);
    localStorage.setItem("Início", inicioEmpresa);
    localStorage.setItem("Salário", ultimoSalario);

    localStorage.setItem("NB", nb);
    localStorage.setItem("Tipo", tipoBeneficio);
    localStorage.setItem("DIB", inicioBeneficio);
    localStorage.setItem("Valor Benefício", valorBeneficio);
  }
};
const loadFunction = () => {
  const confirmation = confirm(
    "Deseja carregar os dados salvos na memória local?"
  );
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.
    const orgao = document.querySelector("#residuos_orgao");
    orgao.value = localStorage.getItem("Órgão");

    const processo = document.querySelector("#residuos_processo");
    processo.value = localStorage.getItem("Processo");

    const email = document.querySelector("#residuos_email");
    email.value = localStorage.getItem("E-mail");

    const assunto = document.querySelectorAll("input[type='checkbox']");

    const selected = localStorage.getItem("Assunto").split(",");

    for (let i = 0; i < assunto.length; i++) {
      if (selected[i] === "true") {
        assunto[i].checked = selected[i];
      }
    }

    const segurado = document.querySelector("#residuos_nome");
    segurado.value = localStorage.getItem("Nome");

    const cpf = document.querySelector("#residuos_cpf");
    cpf.value = localStorage.getItem("CPF");

    const mae = document.querySelector("#residuos_mae");
    mae.value = localStorage.getItem("Mãe");

    const rg = document.querySelector("#residuos_rg");
    rg.value = localStorage.getItem("RG");

    const nascimento = document.querySelector("#residuos_nascimento");
    nascimento.value = localStorage.getItem("Nasc.");

    const endereco = document.querySelector("#residuos_endereco");
    endereco.value = localStorage.getItem("End.");

    const empresa = document.querySelector("#residuos_empresa");
    empresa.value = localStorage.getItem("Empresa");

    const inicioEmpresa = document.querySelector("#residuos_data_inicio");
    inicioEmpresa.value = localStorage.getItem("Início");

    const salario = document.querySelector("#residuos_salario");
    salario.value = localStorage.getItem("Salário");

    const nb = document.querySelector("#residuos_nb");
    nb.value = localStorage.getItem("NB");

    const tipoBeneficio = document.querySelector("#residuos_tipoBeneficio");
    tipoBeneficio.value = localStorage.getItem("Tipo");

    const data_inicio = document.querySelector("#residuos_beneficioInicio");
    data_inicio.value = localStorage.getItem("DIB");

    const valorBeneficio = document.querySelector("#valorBeneficio");
    valorBeneficio.value = localStorage.getItem("Valor Benefício");

    window.scrollTo(0, 0);
  }
};
const clearFunction = () => {
  const form = document.querySelector("form");

  if (confirm("Apagar campos?")) {
    form.reset();
    window.scrollTo(0, 0);
  }
};

//Funções para copiar dados com click.

const nome = () => {
  let nome = document.querySelector("#residuos_nome");
  nome.select();
  document.execCommand("copy");
  //console.log(nome);
};

const cpf = () => {
  let cpf = document.querySelector("#residuos_cpf");
  cpf.select();
  document.execCommand("copy");
  //console.log(cpf);
};

const mae = () => {
  let mae = document.querySelector("#residuos_mae");
  mae.select();
  document.execCommand("copy");
  //console.log(mae);
};

const rg = () => {
  let rg = document.querySelector("#residuos_rg");
  rg.select();
  document.execCommand("copy");
  //console.log(rg);
};

const nb = () => {
  let nb = document.querySelector("#residuos_nb");
  nb.select();
  document.execCommand("copy");
  //console.log(nb);
};

const copiaNome = () => {
  let name = document.querySelector("#nome_copia");
  name.select();
  document.execCommand("copy");
  // console.log("nome");
};

const copiaOrgao = () => {
  let orgao = document.querySelector("#orgao_copia");
  orgao.select();
  document.execCommand("copy");
  // console.log("orgao");
};

const copiaEmail = () => {
  let email = document.querySelector("#email_copia");
  email.select();
  document.execCommand("copy");
  // console.log("email");
};

const copiaAssunto = () => {
  let assunto = document.querySelector("#assunto");
  assunto.select();
  document.execCommand("copy");
  // console.log("assunto");
};

const copiaResposta = () => {
  let resposta = document.querySelector("#resposta");
  resposta.select();
  document.execCommand("copy");
  // console.log("resposta");
};

//Início da página de Resíduos
function resposta_residuos() {
  const orgao = document.querySelector("#residuos_orgao").value;

  const orgaoCopia = document.querySelector("#orgao_copia");

  orgaoCopia.value = orgao;

  const email = document.querySelector("#residuos_email").value;

  const emailCopia = document.querySelector("#email_copia");

  emailCopia.value = email;

  const nome = document.querySelector("#residuos_nome").value;

  const copiaNome = document.querySelector("#nome_copia");

  copiaNome.value = nome;

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

  let valorTotalCom13 =
    proporcionalDias + proporcional13 - (_13jaRecebido + valoresIndevidos);

  if (competenciasSelecionadas.length > 1) {
    valorTotalCom13 =
      mr * (competenciasSelecionadas.length - 1) +
      proporcionalDias +
      proporcional13 -
      (_13jaRecebido + valoresIndevidos);
  }

  let valorTotalSem13 = proporcionalDias - valoresIndevidos;

  if (competenciasSelecionadas.length > 1) {
    valorTotalSem13 =
      mr * (competenciasSelecionadas.length - 1) +
      proporcionalDias -
      valoresIndevidos;
  }

  const assunto = document.querySelector("#assunto");

  let resposta = document.querySelector("#resposta");

  const ressalvas = document.getElementsByClassName("radioRessalvas");

  //Respostas em variáveis para melhor organização do código

  const respostaCalculosCom13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação:

- Data do Óbito: ${dataFormatada}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}

- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}
    
- 13º proporcional a ${mesObito} meses(Períodos com pelo menos 15 dias): R$ ${proporcional13
    .toFixed(2)
    .replace(".", ",")
    .replace(".", ",")}
- 13º já recebido: R$ ${_13jaRecebido.toFixed(2).replace(".", ",")}
- 13º pendente: R$ ${(proporcional13 - _13jaRecebido)
    .toFixed(2)
    .replace(".", ",")}

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalCom13.toFixed(2).replace(".", ",")}

Estes valores serão recalculados e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado pelos interessados.`;

  const respostaCalculosSem13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação:

- Data do Óbito: ${dataFormatada}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}
  
- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}

- 13º: Benefício sem 13º salário.

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalSem13.toFixed(2).replace(".", ",")}

Estes valores serão recalculados e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado pelos interessados.`;

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado o cadastro do(a) segurado(a) ${nome} com base nos dados informados.`;

  const semBeneficio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício no cadastro do(a) Sr.(a) ${nome}, inexistindo assim, resíduos pendentes de pagamento por parte do INSS.`;

  const semResiduos = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}.`;

  const semResiduosCalc13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}: 
  
- Data do Óbito: ${dataFormatada}

- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}

- 13º proporcional a ${mesObito} meses (Períodos com pelo menos 15 dias): R$ ${proporcional13
    .toFixed(2)
    .replace(".", ",")
    .replace(".", ",")}
- 13º já recebido: R$ ${_13jaRecebido.toFixed(2).replace(".", ",")}
- 13º pendente: R$ ${(proporcional13 - _13jaRecebido)
    .toFixed(2)
    .replace(".", ",")}

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalCom13.toFixed(2).replace(".", ",")}`;

  const semResiduosCalcSem13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}:
  
- Data do Óbito: ${dataFormatada}

- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}

- 13º: Benefício sem 13º salário.

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalSem13.toFixed(2).replace(".", ",")}`;

  var acertoContas = `\n\nNeste caso, embora existam resíduos a serem pagos, também existem valores pagos indevidamente, o que acarretará na realização de acerto de contas quando o requerimento dos valores for realizado pelos interessados.`;

  const cadastroDependentes = `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const escopoInss = `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.`;

  const dadosBancarios = `\n\nImportante salientar que o INSS realiza a concessão e administração de benefícios através de sistemas próprios e não tem acesso aos dados bancários/financeiros do segurado, cabendo ao agente bancário esta competência.`;

  const mob = `\n\nNeste caso, como houve recebimento pós-óbito, o processo será encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração das competências e valores recebidos após o óbito do segurado.`;

  const atenciosamente = `\n\nAtenciosamente,\n`;

  assunto.value = `Ofício - Processo ${processo} - ${nome}`;

  //Cálculos com resíduos e ressalvas
  if (situacao[0].checked) {
    //Alerta se a MR estiver zerada
    if (mr === 0) {
      alert("É necessário preencher o valor da MR do benefício.");
      return;
    }

    //Com 13º
    if (situacao13[0].checked) {
      if (ressalvas[0].checked) {
        resposta.value = respostaCalculosCom13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        resposta.value = respostaCalculosCom13 + acertoContas + atenciosamente;
      }
      if (ressalvas[2].checked) {
        resposta.value =
          respostaCalculosCom13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = respostaCalculosCom13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value =
          respostaCalculosCom13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = respostaCalculosCom13 + mob + atenciosamente;
      }

      //Sem 13º e ressalvas
    } else {
      if (ressalvas[0].checked) {
        resposta.value = respostaCalculosSem13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        resposta.value = respostaCalculosSem13 + acertoContas + atenciosamente;
      }
      if (ressalvas[2].checked) {
        resposta.value =
          respostaCalculosSem13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = respostaCalculosSem13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value =
          respostaCalculosSem13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = respostaCalculosSem13 + mob + atenciosamente;
      }
    }
  }

  //Cálculos sem resíduos e ressalvas
  if (situacao[1].checked) {
    //Alerta se a MR estiver zerada

    if (mr === 0) {
      alert("É necessário preencher o valor da MR do benefício.");
    }

    if (situacao13[0].checked) {
      if (ressalvas[0].checked) {
        resposta.value = semResiduosCalc13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        alert(
          "Se não existem resíduos, não existe acerto de contas a ser feito, certo?"
        );
      }
      if (ressalvas[2].checked) {
        resposta.value =
          semResiduosCalc13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = semResiduosCalc13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value = semResiduosCalc13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = semResiduosCalc13 + mob + atenciosamente;
      }
    } else {
      if (ressalvas[0].checked) {
        resposta.value = semResiduosCalcSem13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        alert(
          "Se não existem resíduos, não existe acerto de contas a ser feito, certo?"
        );
      }
      if (ressalvas[2].checked) {
        resposta.value =
          semResiduosCalcSem13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = semResiduosCalcSem13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value = semResiduosCalcSem13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = semResiduosCalcSem13 + mob + atenciosamente;
      }
    }
  }

  //Não-localizado e ressalvas
  if (situacao[2].checked) {
    if (ressalvas[0].checked) {
      resposta.value = naoLocalizado + atenciosamente;
    }
    if (ressalvas[1].checked) {
      alert(
        "Se não foi possível localizar o segurado, como os valores foram verificados?"
      );
    }
    if (ressalvas[2].checked) {
      resposta.value = naoLocalizado + cadastroDependentes + atenciosamente;
    }
    if (ressalvas[3].checked) {
      resposta.value = naoLocalizado + escopoInss + atenciosamente;
    }
    if (ressalvas[4].checked) {
      resposta.value = naoLocalizado + dadosBancarios + atenciosamente;
    }
    if (ressalvas[5].checked) {
      resposta.value = naoLocalizado + mob + atenciosamente;
    }
  }
  //Sem benefício e ressalvas
  if (situacao[3].checked) {
    if (ressalvas[0].checked) {
      resposta.value = semBeneficio + atenciosamente;
    }
    if (ressalvas[1].checked) {
      alert(
        "Se não existe benefício, não pode existir acerto de contas, certo?"
      );
    }
    if (ressalvas[2].checked) {
      resposta.value = semBeneficio + cadastroDependentes + atenciosamente;
    }
    if (ressalvas[3].checked) {
      resposta.value = semBeneficio + escopoInss + atenciosamente;
    }
    if (ressalvas[4].checked) {
      resposta.value = semBeneficio + dadosBancarios + atenciosamente;
    }
    if (ressalvas[5].checked) {
      alert(
        "Se não existe benefício, não podemos encaminhar para o MOB, certo?"
      );
    }
  }

  //Sem resíduos e ressalvas
  if (situacao[4].checked) {
    if (ressalvas[0].checked) {
      resposta.value = semResiduos + atenciosamente;
    }
    if (ressalvas[1].checked) {
      alert(
        "Se não existem resíduos, não existe acerto de contas a ser feito, certo?"
      );
    }
    if (ressalvas[2].checked) {
      resposta.value = semResiduos + cadastroDependentes + atenciosamente;
    }
    if (ressalvas[3].checked) {
      resposta.value = semResiduos + escopoInss + atenciosamente;
    }
    if (ressalvas[4].checked) {
      resposta.value = semResiduos + dadosBancarios + atenciosamente;
    }
    if (ressalvas[5].checked) {
      resposta.value = semResiduos + mob + atenciosamente;
    }
  }
}
// Final da página de Resíduos
