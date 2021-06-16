//Funções para salvar, carregar e limpar os campos.
const saveFunction = () => {
  const confirmation = confirm("Deseja salvar os dados na memória local?");
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.
    const orgao = document.querySelector("#dependentes_orgao").value;

    const processo = document.querySelector("#dependentes_processo").value;

    const email = document.querySelector("#dependentes_email").value;

    let assunto = document.querySelectorAll("input[type='checkbox']");

    let selection = [];

    for (let i of assunto) {
      selection.push(i.checked);
    }

    const segurado = document.querySelector("#dependentes_nome").value;

    const cpf = document.querySelector("#dependentes_cpf").value;

    const mae = document.querySelector("#dependentes_mae").value;

    const rg = document.querySelector("#dependentes_rg").value;

    const nascimento = document.querySelector("#dependentes_nascimento").value;
    // .value.split("-")
    // .reverse()
    // .join("/");

    const endereco = document.querySelector("#dependentes_endereco").value;

    const empresa = document.querySelector("#dependentes_empresa").value;

    const inicioEmpresa = document.querySelector(
      "#dependentes_data_inicio"
    ).value;

    const ultimoSalario = document.querySelector("#dependentes_salario").value;

    const data_inicio = document
      .querySelector("#dependentes_data_inicio")
      .value.split("-")
      .reverse()
      .join("/");

    const nb = document.querySelector("#dependentes_nb").value;

    const tipoBeneficio = document.querySelector(
      "#dependentes_tipoBeneficio"
    ).value;

    const inicioBeneficio = document.querySelector(
      "#dependentes_beneficioInicio"
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
    const orgao = document.querySelector("#dependentes_orgao");
    orgao.value = localStorage.getItem("Órgão");

    const processo = document.querySelector("#dependentes_processo");
    processo.value = localStorage.getItem("Processo");

    const email = document.querySelector("#dependentes_email");
    email.value = localStorage.getItem("E-mail");

    const assunto = document.querySelectorAll("input[type='checkbox']");

    const selected = localStorage.getItem("Assunto").split(",");

    for (let i = 0; i < assunto.length; i++) {
      if (selected[i] === "true") {
        assunto[i].checked = selected[i];
      }
    }

    const segurado = document.querySelector("#dependentes_nome");
    segurado.value = localStorage.getItem("Nome");

    const cpf = document.querySelector("#dependentes_cpf");
    cpf.value = localStorage.getItem("CPF");

    const mae = document.querySelector("#dependentes_mae");
    mae.value = localStorage.getItem("Mãe");

    const rg = document.querySelector("#dependentes_rg");
    rg.value = localStorage.getItem("RG");

    const nascimento = document.querySelector("#dependentes_nascimento");
    nascimento.value = localStorage.getItem("Nasc.");

    const endereco = document.querySelector("#dependentes_endereco");
    endereco.value = localStorage.getItem("End.");

    const empresa = document.querySelector("#dependentes_empresa");
    empresa.value = localStorage.getItem("Empresa");

    const inicioEmpresa = document.querySelector("#dependentes_data_inicio");
    inicioEmpresa.value = localStorage.getItem("Início");

    const salario = document.querySelector("#dependentes_salario");
    salario.value = localStorage.getItem("Salário");

    const nb = document.querySelector("#dependentes_nb");
    nb.value = localStorage.getItem("NB");

    const tipoBeneficio = document.querySelector("#dependentes_tipoBeneficio");
    tipoBeneficio.value = localStorage.getItem("Tipo");

    const data_inicio = document.querySelector("#dependentes_beneficioInicio");
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
  let nome = document.querySelector("#dependentes_segurado_nome");
  nome.select();
  document.execCommand("copy");
  //console.log(nome);
};

const cpf = () => {
  let cpf = document.querySelector("#dependentes_segurado_cpf");
  cpf.select();
  document.execCommand("copy");
  //console.log(cpf);
};

const mae = () => {
  let mae = document.querySelector("#dependentes_segurado_mae");
  mae.select();
  document.execCommand("copy");
  //console.log(mae);
};

const rg = () => {
  let rg = document.querySelector("#dependentes_segurado_rg");
  rg.select();
  document.execCommand("copy");
  //console.log(rg);
};

const copiandoNb1 = () => {
  let nb1 = document.getElementById("nb1");
  nb1.select();
  document.execCommand("copy");
  //console.log(nb1);
};
const copiandoNb2 = () => {
  let nb2 = document.getElementById("nb2");
  nb2.select();
  document.execCommand("copy");
  //console.log(nb2);
};
const copiandoNb3 = () => {
  let nb3 = document.getElementById("nb3");
  nb3.select();
  document.execCommand("copy");
  //console.log(nb3);
};
const copiandoNb4 = () => {
  let nb4 = document.getElementById("nb4");
  nb4.select();
  document.execCommand("copy");
  //console.log(nb4);
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

function resposta_dependentes() {
  const orgao = document.querySelector("#dependentes_orgao").value;

  let orgaoCopia = document.querySelector("#orgao_copia");

  orgaoCopia.value = orgao;

  const processo = document.querySelector("#dependentes_processo").value;

  const email = document.querySelector("#dependentes_email").value;

  let emailCopia = document.querySelector("#email_copia");

  emailCopia.value = email;

  const segurado = document.querySelector("#dependentes_segurado_nome").value;

  let seguradoCopia = document.querySelector("#nome_copia");

  seguradoCopia.value = segurado;

  const dependentes = document.querySelector(".dependentes_textarea").value;

  const situacao = document.getElementsByClassName("depRadioInputs");

  const assuntoEmail = document.querySelector("#assunto");

  const resposta = document.getElementById("resposta");

  //Variáveis com as respostas pra melhor organização

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.\n\nAtenciosamente,\n`;

  const temDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), sendo ele(s):
        
  ${dependentes}\nAtenciosamente,\n`;

  const semDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS).\n\nAtenciosamente,\n`;

  const semDependentesTemRequerimento = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que embora ainda não existam dependentes habilitados com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS), existe requerimento em aberto de benefício de Pensão por Morte.\n\nAtenciosamente,\n`;

  const semDependentesSemRequerimento = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados, e até o momento da realização destas consultas, também não consta requerimento em aberto de benefício de Pensão por Morte em nome com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS) .\n\nAtenciosamente,\n`;

  const semDependentesCertidao = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS), motivo pelo qual estamos encaminhando a Certidão de Inexistência de Dependentes.\n\nAtenciosamente,\n`;

  const tinhamDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que, embora no momento atual não tenham sido localizados dependentes com benefício ativo tendo o(a) Sr.(a) ${segurado} como instituidor(a), foram reconhecidos anteriormente como dependentes:
        
  ${dependentes}\n\nAtenciosamente,\n`;

  const dependentesCertidao = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), motivo pelo qual encaminhamos a Certidão de PIS/PASEP/FGTS conforme solicitação.\n\nAtenciosamente,\n`;

  assuntoEmail.value = `Ofício - Processo ${processo} - ${segurado}`;

  if (situacao[0].checked) {
    resposta.value = naoLocalizado;
  } else if (situacao[1].checked) {
    resposta.value = temDependentes;
  } else if (situacao[2].checked) {
    resposta.value = tinhamDependentes;
  } else if (situacao[3].checked) {
    resposta.value = dependentesCertidao;
  } else if (situacao[4].checked) {
    resposta.value = semDependentes;
  } else if (situacao[5].checked) {
    resposta.value = semDependentesTemRequerimento;
  } else if (situacao[6].checked) {
    resposta.value = semDependentesSemRequerimento;
  } else if (situacao[7].checked) {
    resposta.value = semDependentesCertidao;
  }

  /*
  Fazer a parte de ressalvas

  Incluir ressalva sobre a comunicação de óbito automática por conta do registro em cartório.


  */
}
