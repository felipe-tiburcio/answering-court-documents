//Página SEI
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
