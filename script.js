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

  const semBeneficio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício ativo no cadastro do(a) segurado(a) ${instituidor}.\n\nAtenciosamente,`;

  const faltaOutraOutraCoisa = `Falta outra outra coisa`;

  const ddb = document.querySelector("#pa_ddb").value;

  const tarefaAberta = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que foi aberta a tarefa de nº ${tarefa} para implantação da referida Pensão Alimentícia. O andamento deste protocolo poderá ser acompanhado pelo(s) interessado(s) através do site gov.br/inss, do aplicativo 'Meu INSS' ou através do telefone 135.`;

  const paJaImplantada = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que a referida Pensão Alimentícia no benefício do instituidor ${instituidor} foi implantada sob o número ${nbImplantado} desde ${ddb} conforme informações constantes no relatório anexo. \n\n${atenciosamente}`;

  const implantadaAgora = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que a referida Pensão Alimentícia foi implantada agora...`;

  const outraSituacao = `Outra situação`;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${instituidor}`;

  // Fim das frases - Início dos radios inputs

  if (situacao[0].checked) {
    resposta.value = faltaCpfTitular;
  } else if (situacao[1].checked) {
    resposta.value = semBeneficio;
  } else if (situacao[2].checked) {
    resposta.value = faltaOutraOutraCoisa;
  } else if (situacao[3].checked) {
    resposta.value = tarefaAberta;
  } else if (situacao[4].checked) {
    resposta.value = paJaImplantada;
  } else if (situacao[5].checked) {
    resposta.value = implantadaAgora;
  } else if (situacao[6].checked) {
    resposta.value = outraSituacao;
  }

  // Fim dos radio inputs
}
//Final da página de P.A

//Página SEI???
function resposta_sei() {
  const nome = document.querySelector("#sei_nome").value;

  const beneficio = document.querySelector("#sei_nb").value;

  const situacao = document.getElementsByClassName("radio_sei");

  const dataAgendamento = document
    .getElementById("sei_agendamento")
    .value.split("-")
    .reverse()
    .join("/");

  const horaAgendamento = document.querySelector("#sei_horario").value;

  const aps = document.querySelector("#sei_aps").value;

  const resposta = document.querySelector("#sei_textarea");

  //Respostas em variáveis para melhor organização

  const copiaProcessoNaoLocalizado = `1. Em atenção à presente demanda acerca de cópias de processos elencados em planilha, informamos que da relação informada, apenas um processo foi localizado em arquivo. \n\n2. Sendo assim, para todos os outros casos, encaminhamos anexo com relatórios diversos acerca dos benefícios solicitados.`;

  const copiaProcessoExterno = "";

  const erroPP = `1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que não conseguiu realizar o agendamento de Perícia de Prorrogação dentro do prazo e teve seu benefício nº ${beneficio} indevidamente cessado.
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
    resposta.value = copiaProcessoNaoLocalizado;
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
//Final da página SEI

//Início da página de Protocolo
function resposta_protocolo() {
  const processo = document.querySelector("#protocolo_processo").value;

  const nome = document.querySelector("#protocolo_nome").value;

  const situacao = document.querySelectorAll(".radio_protocolo");

  //Variáveis com os textos das respostas
  const resposta_dossie = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando cópia/dossiê relativo ao segurado ${nome} conforme determinação.`;

  const relatoriosPericia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatórios que detalham aspectos da análise pericial relativa ao caso do(a) segurado(a) ${nome}.`;

  const resposta_em_andamento = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em andamento.`;

  const resposta_exigencia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em exigência.`;

  const resposta_deferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi deferido.`;

  const resposta_indeferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi indeferido.`;

  const mob = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que o caso relativo ao segurado ${nome}, foi encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração.`;

  const ressalva1 = `\n\nImportante ressaltar que esta é a ressalva 1.`;

  const ressalva2 = `\n\nImportante ressaltar que esta é a ressalva 2.`;

  const assunto = document.querySelector("#assunto_email");

  const atenciosamente = `\n\nAtenciosamente,`;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${nome}`;

  const textarea = document.querySelector("#protocolo_textarea");

  if (situacao[0].checked) {
    textarea.value = resposta_dossie + atenciosamente;
  }

  if (situacao[1].checked) {
    textarea.value = relatoriosPericia + atenciosamente;
  }

  if (situacao[2].checked) {
    textarea.value = resposta_em_andamento + atenciosamente;
  }

  if (situacao[3].checked) {
    textarea.value = resposta_exigencia + atenciosamente;
  }

  if (situacao[4].checked) {
    textarea.value = resposta_deferido + atenciosamente;
  }

  if (situacao[5].checked) {
    textarea.value = resposta_indeferido + atenciosamente;
  }

  if (situacao[6].checked) {
    textarea.value = mob + atenciosamente;
  }

  if (situacao[8].checked) {
    textarea.value += ressalva1;
  }

  if (situacao[9].checked) {
    textarea.value += ressalva2;
  }
}
// Fim da página de Procotolo

//Início da página Mandado de Segurança
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

  const resposta = document.querySelector("#ms_textarea");

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
