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
