//Funções para salvar, carregar e limpar os campos.
const saveFunction = () => {
  const confirmation = confirm("Deseja salvar os dados na memória local?");
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.
    const orgao = document.querySelector("#vinculos_orgao").value;

    const processo = document.querySelector("#vinculos_processo").value;

    const email = document.querySelector("#vinculos_email").value;

    let assunto = document.querySelectorAll("input[type='checkbox']");

    let selection = [];

    for (let i of assunto) {
      selection.push(i.checked);
    }

    const segurado = document.querySelector("#vinculos_nome").value;

    const cpf = document.querySelector("#vinculos_cpf").value;

    const mae = document.querySelector("#vinculos_mae").value;

    const rg = document.querySelector("#vinculos_rg").value;

    const nascimento = document.querySelector("#vinculos_nascimento").value;
    // .value.split("-")
    // .reverse()
    // .join("/");

    const endereco = document.querySelector("#vinculos_endereco").value;

    const empresa = document.querySelector("#vinculos_empresa").value;

    const inicioEmpresa = document.querySelector("#vinculos_data_inicio").value;

    const ultimoSalario = document.querySelector("#vinculos_salario").value;

    const data_inicio = document
      .querySelector("#vinculos_data_inicio")
      .value.split("-")
      .reverse()
      .join("/");

    const nb = document.querySelector("#vinculos_nb").value;

    const tipoBeneficio = document.querySelector(
      "#vinculos_tipoBeneficio"
    ).value;

    const inicioBeneficio = document.querySelector(
      "#vinculos_beneficioInicio"
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
    const orgao = document.querySelector("#vinculos_orgao");
    orgao.value = localStorage.getItem("Órgão");

    const processo = document.querySelector("#vinculos_processo");
    processo.value = localStorage.getItem("Processo");

    const email = document.querySelector("#vinculos_email");
    email.value = localStorage.getItem("E-mail");

    const assunto = document.querySelectorAll("input[type='checkbox']");

    const selected = localStorage.getItem("Assunto").split(",");

    for (let i = 0; i < assunto.length; i++) {
      if (selected[i] === "true") {
        assunto[i].checked = selected[i];
      }
    }

    const segurado = document.querySelector("#vinculos_nome");
    segurado.value = localStorage.getItem("Nome");

    const cpf = document.querySelector("#vinculos_cpf");
    cpf.value = localStorage.getItem("CPF");

    const mae = document.querySelector("#vinculos_mae");
    mae.value = localStorage.getItem("Mãe");

    const rg = document.querySelector("#vinculos_rg");
    rg.value = localStorage.getItem("RG");

    const nascimento = document.querySelector("#vinculos_nascimento");
    nascimento.value = localStorage.getItem("Nasc.");

    const endereco = document.querySelector("#vinculos_endereco");
    endereco.value = localStorage.getItem("End.");

    const empresa = document.querySelector("#vinculos_empresa");
    empresa.value = localStorage.getItem("Empresa");

    const inicioEmpresa = document.querySelector("#vinculos_data_inicio");
    inicioEmpresa.value = localStorage.getItem("Início");

    const salario = document.querySelector("#vinculos_salario");
    salario.value = localStorage.getItem("Salário");

    const nb = document.querySelector("#vinculos_nb");
    nb.value = localStorage.getItem("NB");

    const tipoBeneficio = document.querySelector("#vinculos_tipoBeneficio");
    tipoBeneficio.value = localStorage.getItem("Tipo");

    const data_inicio = document.querySelector("#vinculos_beneficioInicio");
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
  let nome = document.querySelector("#vinculos_nome");
  nome.select();
  document.execCommand("copy");
  //console.log(nome);
};

const cpf = () => {
  let cpf = document.querySelector("#vinculos_cpf");
  cpf.select();
  document.execCommand("copy");
  //console.log(cpf);
};

const mae = () => {
  let mae = document.querySelector("#vinculos_mae");
  mae.select();
  document.execCommand("copy");
  //console.log(mae);
};

const rg = () => {
  let rg = document.querySelector("#vinculos_rg");
  rg.select();
  document.execCommand("copy");
  //console.log(rg);
};

const nb = () => {
  let nb = document.querySelector("#vinculos_nb");
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

//Função principal
function resposta_vinculos() {
  let segurado = document.querySelector("#vinculos_nome").value;

  let orgao = document.querySelector("#vinculos_orgao").value;

  let orgaoCopia = document.querySelector("#orgao_copia");

  let processo = document.querySelector("#vinculos_processo").value;

  let email = document.querySelector("#vinculos_email").value;

  let emailCopia = document.querySelector("#email_copia");

  let seguradoCopia = document.querySelector("#nome_copia");

  let endereco = document.querySelector("#vinculos_endereco").value;

  let situacao = document.getElementsByClassName("radio_vinculos");

  let ressalvas = document.querySelectorAll(".ressalvas");

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

  let resposta = document.querySelector("#resposta");

  let assunto = document.querySelector("#assunto");

  // Variáveis com as respostas para melhor organização

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.`;

  const vinculoAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}.`;

  const vinculoESalario = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}, e seu último salário informado pelo empregador foi R$ ${ultimoSalario}.`;

  const vinculoAbertoESemRemuneracao = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo(s) em aberto, no entanto, não existem dados atuais informados pela(s) empresa(s) sobre a remuneração recebida, o que gera dúvida quanto à manutenção deste(s) vínculo(s).`;

  const semVinculoAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo ativo atual no cadastro do(a) segurado(a) ${segurado}.`;

  const beneficioAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} recebe benefício de ${beneficio} desde ${inicioBeneficio} com o valor bruto de R$ ${valorBeneficio}.`;

  const semBeneficioAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício ativo no cadastro do(a) segurado(a) ${segurado}.`;

  const informarEndereco = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta(m) o(s) seguinte(s) endereço(s) do segurado ${segurado}: \n\n${endereco}`;

  const cnisExtrato = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando o relatório completo do CNIS. Neste documento é possível analisar o histórico de vínculos e remunerações do(a) segurado(a) ${segurado}.`;

  const cnisVazio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo, contribuição ou benefício relacionado ao segurado(a) ${segurado}.`;

  const dadosCadastrais = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar os dados cadastrais do(a) segurado(a) ${segurado}.`;

  const ressalvaDependentes = `\n\nImportante ressaltar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const ressalvaEscopoInss = `\n\nImportante ressaltar que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.`;

  const outraSituacao = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que`;

  const atenciosamente = `\n\nAtenciosamente,\n`;

  assunto.value = `Ofício - Processo ${processo} - ${segurado}`;
  seguradoCopia.value = segurado;
  orgaoCopia.value = orgao;
  emailCopia.value = email;

  //Segurado não localizado
  if (situacao[0].checked) {
    if (ressalvas[1].checked) {
      resposta.value = naoLocalizado + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = naoLocalizado + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = naoLocalizado + atenciosamente;
    }
  }
  //Vínculo Ativo
  if (situacao[1].checked) {
    if (ressalvas[1].checked) {
      resposta.value = vinculoAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = vinculoAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = vinculoAtivo + atenciosamente;
    }
  }
  //Vínculo e Salário
  if (situacao[2].checked) {
    if (ressalvas[1].checked) {
      resposta.value = vinculoESalario + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = vinculoESalario + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = vinculoESalario + atenciosamente;
    }
  }
  //Vínculo aberto e sem remuneração recente
  if (situacao[3].checked) {
    if (ressalvas[1].checked) {
      resposta.value =
        vinculoAbertoESemRemuneracao + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value =
        vinculoAbertoESemRemuneracao + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = vinculoAbertoESemRemuneracao + atenciosamente;
    }
  }
  //Sem Vínculo Ativo
  if (situacao[4].checked) {
    if (ressalvas[1].checked) {
      resposta.value = semVinculoAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = semVinculoAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = semVinculoAtivo + atenciosamente;
    }
  }
  //Benefício Ativo
  if (situacao[5].checked) {
    if (ressalvas[1].checked) {
      resposta.value = beneficioAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = beneficioAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = beneficioAtivo + atenciosamente;
    }
  }
  //Sem Benefício Ativo
  if (situacao[6].checked) {
    if (ressalvas[1].checked) {
      resposta.value = semBeneficioAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = semBeneficioAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = semBeneficioAtivo + atenciosamente;
    }
  }
  //Endereço
  if (situacao[7].checked) {
    if (ressalvas[1].checked) {
      resposta.value = informarEndereco + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = informarEndereco + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = informarEndereco + atenciosamente;
    }
  }
  //CNIS Extrato
  if (situacao[8].checked) {
    if (ressalvas[1].checked) {
      resposta.value = cnisExtrato + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = cnisExtrato + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = cnisExtrato + atenciosamente;
    }
  }
  //CNIS Vazio
  if (situacao[9].checked) {
    if (ressalvas[1].checked) {
      resposta.value = cnisVazio + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = cnisVazio + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = cnisVazio + atenciosamente;
    }
  }
  //Dados Cadastrais
  if (situacao[10].checked) {
    if (ressalvas[1].checked) {
      resposta.value = dadosCadastrais + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = dadosCadastrais + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = dadosCadastrais + atenciosamente;
    }
  }
  //Outra Situação
  if (situacao[11].checked) {
    if (ressalvas[1].checked) {
      resposta.value = outraSituacao + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = outraSituacao + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = outraSituacao + atenciosamente;
    }
  }
}
