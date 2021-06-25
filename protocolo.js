//Funções para salvar, carregar e limpar os campos.
const saveFunction = () => {
  const confirmation = confirm("Deseja salvar os dados na memória local?");
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.
    const orgao = document.querySelector("#protocolo_orgao").value;

    const processo = document.querySelector("#protocolo_processo").value;

    const email = document.querySelector("#protocolo_email").value;

    let assunto = document.querySelectorAll("input[type='checkbox']");

    let selection = [];

    for (let i of assunto) {
      selection.push(i.checked);
    }

    const segurado = document.querySelector("#protocolo_nome").value;

    const cpf = document.querySelector("#protocolo_cpf").value;

    const mae = document.querySelector("#protocolo_mae").value;

    const rg = document.querySelector("#protocolo_rg").value;

    const nascimento = document.querySelector("#protocolo_nascimento").value;
    // .value.split("-")
    // .reverse()
    // .join("/");

    const endereco = document.querySelector("#protocolo_endereco").value;

    const empresa = document.querySelector("#protocolo_empresa").value;

    const inicioEmpresa = document.querySelector(
      "#protocolo_data_inicio"
    ).value;

    const ultimoSalario = document.querySelector("#protocolo_salario").value;

    const data_inicio = document
      .querySelector("#protocolo_data_inicio")
      .value.split("-")
      .reverse()
      .join("/");

    const nb = document.querySelector("#protocolo_nb").value;

    const tipoBeneficio = document.querySelector(
      "#protocolo_tipoBeneficio"
    ).value;

    const inicioBeneficio = document.querySelector(
      "#protocolo_beneficioInicio"
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
    const orgao = document.querySelector("#protocolo_orgao");
    orgao.value = localStorage.getItem("Órgão");

    const processo = document.querySelector("#protocolo_processo");
    processo.value = localStorage.getItem("Processo");

    const email = document.querySelector("#protocolo_email");
    email.value = localStorage.getItem("E-mail");

    const assunto = document.querySelectorAll("input[type='checkbox']");

    const selected = localStorage.getItem("Assunto").split(",");

    for (let i = 0; i < assunto.length; i++) {
      if (selected[i] === "true") {
        assunto[i].checked = selected[i];
      }
    }

    const segurado = document.querySelector("#protocolo_nome");
    segurado.value = localStorage.getItem("Nome");

    const cpf = document.querySelector("#protocolo_cpf");
    cpf.value = localStorage.getItem("CPF");

    const mae = document.querySelector("#protocolo_mae");
    mae.value = localStorage.getItem("Mãe");

    const rg = document.querySelector("#protocolo_rg");
    rg.value = localStorage.getItem("RG");

    const nascimento = document.querySelector("#protocolo_nascimento");
    nascimento.value = localStorage.getItem("Nasc.");

    const endereco = document.querySelector("#protocolo_endereco");
    endereco.value = localStorage.getItem("End.");

    const empresa = document.querySelector("#protocolo_empresa");
    empresa.value = localStorage.getItem("Empresa");

    const inicioEmpresa = document.querySelector("#protocolo_data_inicio");
    inicioEmpresa.value = localStorage.getItem("Início");

    const salario = document.querySelector("#protocolo_salario");
    salario.value = localStorage.getItem("Salário");

    const nb = document.querySelector("#protocolo_nb");
    nb.value = localStorage.getItem("NB");

    const tipoBeneficio = document.querySelector("#protocolo_tipoBeneficio");
    tipoBeneficio.value = localStorage.getItem("Tipo");

    const data_inicio = document.querySelector("#protocolo_beneficioInicio");
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

//Funções de cópia com um click.

const nome = () => {
  let nome = document.querySelector("#protocolo_nome");
  nome.select();
  document.execCommand("copy");
  //console.log(nome);
};

const cpf = () => {
  let cpf = document.querySelector("#protocolo_cpf");
  cpf.select();
  document.execCommand("copy");
  //console.log(cpf);
};

const rg = () => {
  let rg = document.querySelector("#protocolo_rg");
  rg.select();
  document.execCommand("copy");
  //console.log(rg);
};

const mae = () => {
  let mae = document.querySelector("#protocolo_mae");
  mae.select();
  document.execCommand("copy");
  //console.log(mae);
};

const nb = () => {
  let nb = document.querySelector("#protocolo_nb");
  nb.select();
  document.execCommand("copy");
  //console.log(nb);
};

const get = () => {
  let get = document.querySelector("#protocolo_get");
  get.select();
  document.execCommand("copy");
  //console.log(get);
};

const req = () => {
  let req = document.querySelector("#protocolo_req");
  req.select();
  document.execCommand("copy");
  //console.log(req);
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
  //console.log(orgao);
};

const copiaEmail = () => {
  let email = document.querySelector("#email_copia");
  email.select();
  document.execCommand("copy");
  console.log(email);
};

const copiaAssunto = () => {
  let assunto = document.querySelector("#assunto");
  assunto.select();
  document.execCommand("copy");
  //console.log(assunto);
};

const copiaResposta = () => {
  let resposta = document.querySelector("#resposta");
  resposta.select();
  document.execCommand("copy");
  //console.log(resposta);
};

//Função principal
function resposta_protocolo() {
  const orgao = document.querySelector("#protocolo_orgao").value;

  const orgaoCopia = document.querySelector("#orgao_copia");

  orgaoCopia.value = orgao;

  const processo = document.querySelector("#protocolo_processo").value;

  const nome = document.querySelector("#protocolo_nome").value;

  const nomeCopia = document.querySelector("#nome_copia");

  nomeCopia.value = nome;

  const email = document.querySelector("#protocolo_email").value;

  const emailCopia = document.querySelector("#email_copia");

  emailCopia.value = email;

  const situacao = document.querySelectorAll(".radio_protocolo");

  //Variáveis com os textos das respostas
  const resposta_dossie = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando cópia/dossiê relativo ao segurado ${nome} conforme solicitação.`;

  const nao_localizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que não foi possível localizar o processo administrativo em questão em nossos arquivos. Sendo assim, encaminhamos dossiê com relatórios diversos relativos ao benefício do segurado ${nome}.`;

  const relatoriosPericia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatórios que detalham aspectos da análise pericial relativa ao caso do(a) segurado(a) ${nome}.`;

  const resposta_em_andamento = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em andamento.`;

  const resposta_exigencia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em exigência.`;

  const resposta_deferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi deferido.`;

  const resposta_indeferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi indeferido.`;

  const mob = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que o caso relativo ao segurado ${nome}, foi encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração.`;

  const ressalva1 = `\n\nImportante ressaltar que esta é a ressalva 1.`;

  const ressalva2 = `\n\nImportante ressaltar que esta é a ressalva 2.`;

  const assunto = document.querySelector("#assunto");

  const atenciosamente = `\n\nAtenciosamente,\n`;

  if (processo === "" && nome === "") {
    alert("Campos obrigatórios vazios. Favor preencher.");
    return;
  } else {
    assunto.value = `Ofício - Processo ${processo} - ${nome}`;
  }

  const textarea = document.querySelector("#resposta");

  if (situacao[0].checked) {
    textarea.value = resposta_dossie + atenciosamente;
  }

  if (situacao[1].checked) {
    textarea.value = relatoriosPericia + atenciosamente;
  }

  if (situacao[2].checked) {
    textarea.value = nao_localizado + atenciosamente;
  }

  if (situacao[3].checked) {
    textarea.value = resposta_em_andamento + atenciosamente;
  }

  if (situacao[4].checked) {
    textarea.value = resposta_exigencia + atenciosamente;
  }

  if (situacao[5].checked) {
    textarea.value = resposta_deferido + atenciosamente;
  }

  if (situacao[6].checked) {
    textarea.value = resposta_indeferido + atenciosamente;
  }

  if (situacao[7].checked) {
    textarea.value = mob + atenciosamente;
  }

  if (situacao[9].checked) {
    textarea.value += ressalva1;
  }

  if (situacao[10].checked) {
    textarea.value += ressalva2;
  }
}
// Fim da página de Procotolo
