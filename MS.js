//Funções para salvar, carregar e limpar os campos.
const saveFunction = () => {
  const confirmation = confirm("Deseja salvar os dados na memória local?");
  if (confirmation) {
    const form = document.querySelector("form");

    //Parte que seleciona os elementos da página.

    let assunto = document.querySelectorAll("input[type='checkbox']");

    let selection = [];

    for (let i of assunto) {
      selection.push(i.checked);
    }

    const segurado = document.querySelector("#ms_nome").value;

    const cpf = document.querySelector("#ms_cpf").value;

    const nit = document.querySelector("#ms_nit").value;

    const rg = document.querySelector("#ms_rg").value;

    const nascimento = document.querySelector("#ms_nascimento").value;
    // .value.split("-")
    // .reverse()
    // .join("/");

    const endereco = document.querySelector("#ms_endereco").value;

    const empresa = document.querySelector("#ms_empresa").value;

    const inicioEmpresa = document.querySelector("#ms_data_inicio").value;

    const ultimoSalario = document.querySelector("#ms_salario").value;

    const data_inicio = document
      .querySelector("#ms_data_inicio")
      .value.split("-")
      .reverse()
      .join("/");

    const nb = document.querySelector("#ms_nb").value;

    const tipoBeneficio = document.querySelector("#ms_tipoBeneficio").value;

    const inicioBeneficio = document.querySelector("#ms_beneficioInicio").value;

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
    const orgao = document.querySelector("#ms_orgao");
    orgao.value = localStorage.getItem("Órgão");

    const processo = document.querySelector("#ms_processo");
    processo.value = localStorage.getItem("Processo");

    const email = document.querySelector("#ms_email");
    email.value = localStorage.getItem("E-mail");

    const assunto = document.querySelectorAll("input[type='checkbox']");

    const selected = localStorage.getItem("Assunto").split(",");

    for (let i = 0; i < assunto.length; i++) {
      if (selected[i] === "true") {
        assunto[i].checked = selected[i];
      }
    }

    const segurado = document.querySelector("#ms_nome");
    segurado.value = localStorage.getItem("Nome");

    const cpf = document.querySelector("#ms_cpf");
    cpf.value = localStorage.getItem("CPF");

    const mae = document.querySelector("#ms_mae");
    mae.value = localStorage.getItem("Mãe");

    const rg = document.querySelector("#ms_rg");
    rg.value = localStorage.getItem("RG");

    const nascimento = document.querySelector("#ms_nascimento");
    nascimento.value = localStorage.getItem("Nasc.");

    const endereco = document.querySelector("#ms_endereco");
    endereco.value = localStorage.getItem("End.");

    const empresa = document.querySelector("#ms_empresa");
    empresa.value = localStorage.getItem("Empresa");

    const inicioEmpresa = document.querySelector("#ms_data_inicio");
    inicioEmpresa.value = localStorage.getItem("Início");

    const salario = document.querySelector("#ms_salario");
    salario.value = localStorage.getItem("Salário");

    const nb = document.querySelector("#ms_nb");
    nb.value = localStorage.getItem("NB");

    const tipoBeneficio = document.querySelector("#ms_tipoBeneficio");
    tipoBeneficio.value = localStorage.getItem("Tipo");

    const data_inicio = document.querySelector("#ms_beneficioInicio");
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
  let nome = document.querySelector("#ms_nome");
  nome.select();
  document.execCommand("copy");
  //console.log(nome);
};

const cpf = () => {
  let cpf = document.querySelector("#ms_cpf");
  cpf.select();
  document.execCommand("copy");
  //console.log(cpf);
};

const nit = () => {
  let nit = document.querySelector("#ms_nit");
  nit.select();
  document.execCommand("copy");
  //console.log(nit);
};

const rg = () => {
  let rg = document.querySelector("#ms_rg");
  rg.select();
  document.execCommand("copy");
  //console.log(rg);
};

const get = () => {
  let get = document.querySelector("#ms_get");
  get.select();
  document.execCommand("copy");
  //console.log(get);
};

const req = () => {
  let req = document.querySelector("#ms_req");
  req.select();
  document.execCommand("copy");
  //console.log(req);
};

const nb = () => {
  let nb = document.querySelector("#ms_nb");
  nb.select();
  document.execCommand("copy");
  //console.log(nb);
};

const copiaResposta = () => {
  let resposta = document.querySelector("#resposta");
  resposta.select();
  document.execCommand("copy");
  //console.log(resposta);
};

//Função principal

function resposta_ms() {
  const nome = document.querySelector("#ms_nome").value;

  const beneficio = document.querySelector("#ms_nb").value;

  const situacao = document.getElementsByClassName("radio_ms");

  const beneficioNumero = document.querySelector("#ms_nb").value;

  const dcb = document
    .querySelector("#ms_dcb")
    .value.split("-")
    .reverse()
    .join("/");

  const data1pagamento = document
    .querySelector("#ms_data_pagamento")
    .value.split("-")
    .reverse()
    .join("/");

  const dataAtendimento = document
    .getElementById("ms_data_atendimento")
    .value.split("-")
    .reverse()
    .join("/");

  const aps_atendimento = document.querySelector("#ms_aps_atendimento").value;

  const dataAgendamento = document
    .getElementById("ms_data_agendamento")
    .value.split("-")
    .reverse()
    .join("/");

  const horaAgendamento = document.querySelector(
    "#ms_horario_agendamento"
  ).value;

  const aps_agendamento = document.querySelector("#ms_aps_agendamento").value;

  const resposta = document.querySelector("#resposta");

  //Respostas em variáveis para melhor organização

  const pendenciaResolvidaComPagamento = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. Verifica-se que o requerimento do segurado foi concedido sob o benefício de nº ${beneficioNumero} com DCB em ${dcb} e tem o primeiro pagamento previsto para ${data1pagamento}.`;

  const pendenciaResolvida = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que relatou problemas na análise/concessão de seu benefício.\n 
2. Verifica-se através de relatório anexo que a pendência relatada foi resolvida e o requerimento do(a) segurado(a) foi deferido sob o benefício de nº ${beneficioNumero}.

4. O valor dos pagamentos e suas respectivas datas serão calculados automaticamente e poderão ser acompanhados pelo site gov.br/meuinss ou pelo aplicativo Meu INSS.`;

  const erroPP = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que não conseguiu realizar o agendamento de Perícia de Prorrogação dentro do prazo e teve seu benefício nº ${beneficio} indevidamente cessado. 
    
2. Situação resolvida e perícia agendada para o dia ${dataAgendamento} às ${horaAgendamento} na ${aps_agendamento}.
    
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

  const periciaAgendada = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} referente demora na análise do seu requerimento de Benefício de Prestação Continuada. 
    
2. É possível verificar através do relatório da tarefa que a Avaliação Social foi realizada em ${dataAtendimento}. 
    
3. Sendo assim, restou pendente a realização da Perícia Médica, e consta no processo que esta teve que ser remarcada para o dia ${dataAgendamento} às ${horaAgendamento} na ${aps_agendamento}.`;

  const exigencia = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. É possível verificar através de relatório anexo que o requerimento se encontra em exigência sendo necessária a complementação da documentação por parte do segurado. 
    
3. Sendo assim, o segurado tem prazo de 30 dias para apresentar a documentação solicitada no processo administrativo.`;

  const mob = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de sentença judicial determinando que seja realizada apuração relativa aos benefícios do segurado ${nome}. 
    
2. É possível verificar através de relatório anexo que atualmente o segurado recebe benefício de Aposentadoria por Invalidez sob o número ${beneficioNumero}. 
    
3. Sendo assim, foi aberta tarefa no GET com encaminhamento para o setor de Monitoramento Operacional de Benefícios(MOB) para que seja realizada a devida apuração acerca dos fatos relatados.`;

  const outraSituacao = `Outra situação`;

  const atenciosamente = `\n\nAtenciosamente,`;

  //Fim das frases - começo da lógica

  if (situacao[0].checked) {
    resposta.value = pendenciaResolvida;
  } else if (situacao[1].checked) {
    resposta.value = erroPP;
  } else if (situacao[2].checked) {
    resposta.value = finalizarAnalise;
  } else if (situacao[3].checked) {
    resposta.value = informacoesDossie;
  } else if (situacao[4].checked) {
    resposta.value = periciaAgendada;
  } else if (situacao[5].checked) {
    resposta.value = analiseMedica;
  } else if (situacao[6].checked) {
    resposta.value = exigencia;
  } else if (situacao[7].checked) {
    resposta.value = mob;
  } else if (situacao[8].checked) {
    resposta.value = outraSituacao;
  }
}
//Final da página Mandado de Segurança
