//Funções para salvar, carregar e limpar os campos.
const saveFunction = () => {
  const confirmation = confirm("Deseja salvar os dados na memória local?");
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.
    const orgao = document.querySelector("#consignacoes_orgao").value;

    const processo = document.querySelector("#consignacoes_processo").value;

    const email = document.querySelector("#consignacoes_email").value;

    let assunto = document.querySelectorAll("input[type='checkbox']");

    let selection = [];

    for (let i of assunto) {
      selection.push(i.checked);
    }

    const segurado = document.querySelector("#consignacoes_nome").value;

    const cpf = document.querySelector("#consignacoes_cpf").value;

    const mae = document.querySelector("#consignacoes_mae").value;

    const rg = document.querySelector("#consignacoes_rg").value;

    const nascimento = document.querySelector("#consignacoes_nascimento").value;
    // .value.split("-")
    // .reverse()
    // .join("/");

    const endereco = document.querySelector("#consignacoes_endereco").value;

    const empresa = document.querySelector("#consignacoes_empresa").value;

    const inicioEmpresa = document.querySelector(
      "#consignacoes_data_inicio"
    ).value;

    const ultimoSalario = document.querySelector("#consignacoes_salario").value;

    const data_inicio = document
      .querySelector("#consignacoes_data_inicio")
      .value.split("-")
      .reverse()
      .join("/");

    const nb = document.querySelector("#consignacoes_nb").value;

    const tipoBeneficio = document.querySelector(
      "#consignacoes_tipoBeneficio"
    ).value;

    const inicioBeneficio = document.querySelector(
      "#consignacoes_beneficioInicio"
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
    const orgao = document.querySelector("#consignacoes_orgao");
    orgao.value = localStorage.getItem("Órgão");

    const processo = document.querySelector("#consignacoes_processo");
    processo.value = localStorage.getItem("Processo");

    const email = document.querySelector("#consignacoes_email");
    email.value = localStorage.getItem("E-mail");

    const assunto = document.querySelectorAll("input[type='checkbox']");

    const selected = localStorage.getItem("Assunto").split(",");

    for (let i = 0; i < assunto.length; i++) {
      if (selected[i] === "true") {
        assunto[i].checked = selected[i];
      }
    }

    const segurado = document.querySelector("#consignacoes_nome");
    segurado.value = localStorage.getItem("Nome");

    const cpf = document.querySelector("#consignacoes_cpf");
    cpf.value = localStorage.getItem("CPF");

    const mae = document.querySelector("#consignacoes_mae");
    mae.value = localStorage.getItem("Mãe");

    const rg = document.querySelector("#consignacoes_rg");
    rg.value = localStorage.getItem("RG");

    const nascimento = document.querySelector("#consignacoes_nascimento");
    nascimento.value = localStorage.getItem("Nasc.");

    const endereco = document.querySelector("#consignacoes_endereco");
    endereco.value = localStorage.getItem("End.");

    const empresa = document.querySelector("#consignacoes_empresa");
    empresa.value = localStorage.getItem("Empresa");

    const inicioEmpresa = document.querySelector("#consignacoes_data_inicio");
    inicioEmpresa.value = localStorage.getItem("Início");

    const salario = document.querySelector("#consignacoes_salario");
    salario.value = localStorage.getItem("Salário");

    const nb = document.querySelector("#consignacoes_nb");
    nb.value = localStorage.getItem("NB");

    const tipoBeneficio = document.querySelector("#consignacoes_tipoBeneficio");
    tipoBeneficio.value = localStorage.getItem("Tipo");

    const data_inicio = document.querySelector("#consignacoes_beneficioInicio");
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
  let nome = document.querySelector("#consignacoes_nome");
  nome.select();
  document.execCommand("copy");
  //console.log(nome);
};

const cpf = () => {
  let cpf = document.querySelector("#consignacoes_cpf");
  cpf.select();
  document.execCommand("copy");
  //console.log(cpf);
};

const mae = () => {
  let mae = document.querySelector("#consignacoes_mae");
  mae.select();
  document.execCommand("copy");
  //console.log(mae);
};

const rg = () => {
  let rg = document.querySelector("#consignacoes_rg");
  rg.select();
  document.execCommand("copy");
  //console.log(rg);
};

const nb = () => {
  let nb = document.querySelector("#consignacoes_nb");
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
  let assunto = document.querySelector("#assunto_email");
  assunto.select();
  document.execCommand("copy");
  // console.log("assunto");
};

const copiaResposta = () => {
  let resposta = document.querySelector("#textarea_resposta");
  resposta.select();
  document.execCommand("copy");
  // console.log("resposta");
};

// Função principal
function resposta_consignacoes() {
  let orgao = document.querySelector("#consignacoes_orgao").value;

  let orgaoCopia = document.querySelector("#orgao_copia");

  orgaoCopia.value = orgao;

  let processo = document.querySelector("#consignacoes_processo").value;

  let email = document.querySelector("#consignacoes_email").value;

  let emailCopia = document.querySelector("#email_copia");

  emailCopia.value = email;

  let segurado = document.querySelector("#consignacoes_nome").value;

  let seguradoCopia = document.querySelector("#nome_copia");

  seguradoCopia.value = segurado;

  let situacao = document.getElementsByClassName("radio_consignacoes");

  let ressalva = document.getElementsByClassName("ressalvaConsignacoes");

  let assunto = document.getElementById("assunto_email");

  let textarea = document.querySelector("#textarea_resposta");

  //Respostas salvas em variáveis

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.`;

  const consignacaoAtiva = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar a seguinte situação referente os contratos efetuados entre o segurado ${segurado} e o(s) agente(s) financeiro(s):`;

  const excluidoBanco = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o agente financeiro efetuou a exclusão da consignação no benefício do segurado ${segurado}.`;

  const excluidoInss = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o INSS efetuou a suspensão da consignação conforme determinação.`;

  const historicoCompleto = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível analisar o histórico completo de consignações efetuadas pelos agentes financeiros no cadastro do segurado(a) ${segurado}.`;

  const historicoEBloqueio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento, além de ser possível analisar o histórico completo de consignações efetuadas pelos agentes financeiros, também é possível verificar que foi lançado bloqueio para que não seja mais possível lançar novas consignações no benefício do(a) segurado(a) ${segurado}.`;

  const ressalvaDadosBancarios = `\n\nRessaltamos que o INSS trata da concessão e manutenção de benefícios previdenciários, não dispondo assim dos detalhes contratuais firmados entre o segurado e o agente bancário responsável pelo lançamento da consignação.`;

  const ressalvaDependentes = `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const ressalvaEscopoInss = `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre outros programas de outros entes federais.`;

  const atenciosamente = `\n\nAtenciosamente,\n`;

  assunto.value = `Ofício - Processo ${processo} - ${segurado}`;

  //Segurado não-localizado
  if (situacao[0].checked) {
    if (ressalva[0].checked) {
      textarea.value = naoLocalizado + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value = naoLocalizado + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = naoLocalizado + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = naoLocalizado + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Consignação ativa
  if (situacao[1].checked) {
    if (ressalva[0].checked) {
      textarea.value = consignacaoAtiva + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value =
        consignacaoAtiva + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = consignacaoAtiva + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = consignacaoAtiva + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Cancelada pelo banco
  if (situacao[2].checked) {
    if (ressalva[0].checked) {
      textarea.value = excluidoBanco + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value = excluidoBanco + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = excluidoBanco + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = excluidoBanco + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Excluído pelo INSS
  if (situacao[3].checked) {
    if (ressalva[0].checked) {
      textarea.value = excluidoInss + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value = excluidoInss + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = excluidoInss + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = excluidoInss + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Histórico completo
  if (situacao[4].checked) {
    if (ressalva[0].checked) {
      textarea.value = historicoCompleto + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value =
        historicoCompleto + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = historicoCompleto + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = historicoCompleto + ressalvaEscopoInss + atenciosamente;
    }
  }
  //Histórico e Bloqueio
  if (situacao[5].checked) {
    if (ressalva[0].checked) {
      textarea.value = historicoEBloqueio + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value =
        historicoEBloqueio + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value =
        historicoEBloqueio + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = historicoEBloqueio + ressalvaEscopoInss + atenciosamente;
    }
  }
}
