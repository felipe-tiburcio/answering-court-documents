// Início da página de Dependentes

function resposta_dependentes() {
    const processo = document.querySelector("#dependentes_processo").value;

    const segurado = document.querySelector("#dependentes_segurado_nome").value;

    let situacao = document.getElementsByClassName("radio");

    let resposta = document.getElementById("dependentes_resposta");

    let assunto = document.getElementById("dependentes_assunto_email");
    
    assunto.innerHTML = `Ofício - Processo ${processo} - ${segurado}`;

    let dependentes = document.querySelector(".dependentes_textarea").value;
    
    if (situacao[0].checked) {
        
        resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.
        
Atenciosamente,
        
        `

    } else if (situacao[1].checked) {
        
        resposta.innerHTML = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), sendo ele(s):
        
${dependentes}        
Atenciosamente,
        `
    } else if (situacao[2].checked) {
        resposta.innerHTML = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS).

Atenciosamente,
        `
            
    } else if (situacao[3].checked) {
        
        resposta.innerHTML = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS), motivo pelo qual estamos encaminhando a Certidão de Inexistência de Dependentes, conforme solicitação.

Atenciosamente,
        
        
        `
        
    } else if (situacao[4].checked) {
        
        resposta.innerHTML = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que, embora no momento atual não tenham sido localizados dependentes com benefício ativo do(a) Sr.(a) ${segurado} como instituidor(a), foram reconhecidos anteriormente como dependentes:
        
        ${dependentes[0].value}
        ---------------------------------------------
        ${dependentes[1].value}
        ---------------------------------------------
        ${dependentes[2].value}
        
Atenciosamente,
        `

    } else if (situacao[5].checked){

        resposta.innerHTML = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), motivo pelo qual encaminhamos a Certidão de PIS/PASEP/FGTS conforme solicitação.
        
Atenciosamente,
        `
        
    } else {
        alert("Você precisa preencher os campos e selecionar uma situação");
    }

}

// Final da página de Dependentes


//Início da página de Vínculos

function resposta_vinculos() {
    let processo = document.querySelector("#vinculos_processo").value;

    let segurado = document.querySelector("#vinculos_nome").value;

    let endereco = document.querySelector("#vinculos_endereco").value;

    let situacao = document.getElementsByClassName("radio_vinculos");

    let empresa = document.querySelector("#vinculos_empresa").value;

    let ultimoSalario = document.querySelector("#vinculos_salario").value;

    let data_inicio = document.querySelector("#vinculos_data_inicio").value;

    let beneficio = document.querySelector("#vinculos_tipoBeneficio").value;

    let inicioBeneficio = document.querySelector("#vinculos_beneficioInicio").value;

    let valorBeneficio = document.querySelector("#valorBeneficio").value;

    let resposta = document.querySelector("#vinculos_textarea");
    
    let assunto = document.getElementById("vinculos_assunto_email");
    
    assunto.innerHTML = `Ofício - Processo ${processo} - ${segurado}`;

  if (situacao[0].checked) {
    
      resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.

Atenciosamente,
      `
 
  } else if(situacao[1].checked) {
    
      resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}.
      
Atenciosamente,
      `  
      
  } else if(situacao[2].checked){

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}, e seu último salário informado pelo empregador foi R$ ${ultimoSalario}.
      
Atenciosamente,
      `  

  } else if(situacao[3].checked) {

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo(s) em aberto, no entanto, não existem dados atuais informados pela(s) empresa(s) sobre a remuneração recebida, o que gera dúvida quanto à manutenção deste(s) vínculo(s).

Atenciosamente,

    `
  } else if (situacao[4].checked) {
    
      resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo ativo atual no cadastro do(a) segurado(a) ${segurado}.
      
Atenciosamente,
      `
  } else if (situacao[5].checked) {

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} recebe benefício de ${beneficio} desde ${inicioBeneficio} com o valor bruto de R$ ${valorBeneficio}.

Atenciosamente,
`

  } else if(situacao[6].checked){

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício ativo no cadastro do(a) segurado(a) ${segurado}.

Atenciosamente,
`
  } else if (situacao[7].checked){

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta(m) o(s) seguinte(s) endereço(s) do segurado ${segurado}: 

${endereco}

    
Atenciosamente,
    `
  } else if (situacao[8].checked) {

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível analisar o histórico completo de vínculos e remunerações do(a) segurado(a) ${segurado}.
    
Atenciosamente,
    `
  } else if(situacao[9].checked) {

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar os dados cadastrais do(a) segurado(a) ${segurado}.

Atenciosamente,
    `
  }


  if(situacao[10].checked) {
      resposta.innerHTML += `\n\nImportante ressaltar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.

Atenciosamente,
      `
  } else if(situacao[11].checked) {
      resposta.innerHTML += `\n\nImportante ressaltar que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.
      
Atenciosamente,
      `
  }
}

//Final da página de Vínculos



//Início da página de Resíduos

function respostaResiduos(){


    let nome = document.querySelector("#residuos_nome").value;

    let processo = document.querySelector("#residuos_processo").value;

    let semResiduos = document.querySelectorAll(".radioResiduos");

    let mr = Number(document.querySelector("#residuos_mr").value);

    let valorDia = mr/30;

    let diaObito = document.querySelector("#dia_obito").value;

    let mesObito = document.querySelector("#mes_obito").value;

    let mesObitoCalc = mesObito;
        
    let anoObito = document.querySelector("#ano_obito").value;

    let proporcionalDias = valorDia*Number(diaObito);

    let proporcionalDiasCalc = proporcionalDias;

    let mesesCheckbox = document.querySelectorAll(".checkboxes");

    let mesesSelecionados;

    let competenciasSelecionadas = [];

        for (i=0; i<mesesCheckbox.length; i++) {
        
            if (mesesCheckbox[i].checked) {
            mesesSelecionados += 1;
            competenciasSelecionadas.push(" "+ mesesCheckbox[i].value+"");  
            }
        }

        if(competenciasSelecionadas == ""){
            proporcionalDiasCalc = 0;
          }
    
    let valoresIndevidos = document.querySelector("#valoresIndevidos").value;

    let tem13 = document.querySelector("#radio_13_yes").checked;

    let jaRecebido = document.querySelector("#o13_recebido").value;

    let proporcional13 = Number(mr/12*mesObitoCalc);
    
    let valorTotal = (proporcionalDias + proporcional13) - jaRecebido; 

    let assunto = document.querySelector("#residuos_assunto");

    let resposta = document.querySelector("#residuos_resposta");

    let ressalvas = document.getElementsByClassName("radioRessalvas");


assunto.innerHTML = `Ofício - Processo ${processo} - ${nome}`

    if(semResiduos[0].checked){
        
        resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado o cadastro do(a) segurado(a) ${nome} com base nos dados informados.

Atenciosamente,
`
    } else if(semResiduos[1].checked){
        resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício no cadastro do(a) Sr.(a)${nome}, inexistindo assim, resíduos pendentes de pagamento por parte do INSS.

Atenciosamente,
`
    } else if(semResiduos[2].checked){
        resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem resíduos pendentes de pagamento do Sr.(a)${nome}, por parte do INSS.

Atenciosamente,
`
    } else {

resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação: 

- Valor integral do Benefício: R$ ${mr.toFixed(2)}
- Data do Óbito: ${diaObito}/${mesObito}/${anoObito}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}
- Proporcional relativo a ${diaObito} dias: R$ ${proporcionalDias.toFixed(2)}
- Valores a serem devolvidos: R$ ${valoresIndevidos}
- Valores pendentes: R$ ${Number(proporcionalDiasCalc-valoresIndevidos)}

`
    if(diaObito < 15) {

        mesObitoCalc -=1;
        proporcional13 = Number(mr/12*mesObitoCalc);
        resposta.innerHTML += `- 13º proporcional a ${mesObitoCalc} meses(Períodos com pelo menos 15 dias): R$ ${proporcional13.toFixed(2)}
- 13º já recebido: R$ ${jaRecebido.toFixed(2)}
- 13º pendente: R$ ${(proporcional13-jaRecebido).toFixed(2)}

Total: Valores pendentes + 13º pendente = R$ ${((proporcional13-jaRecebido) + (proporcionalDiasCalc - valoresIndevidos)).toFixed(2)}

Cabe ressaltar que este valor será recalculado e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado.	

Atenciosamente,`

    } else {

resposta.innerHTML += `- 13º proporcional a ${mesObito} meses(Períodos com pelo menos 15 dias): R$ ${proporcional13.toFixed(2)}
- 13º já recebido: R$ ${jaRecebido}
- 13º pendente: R$ ${(proporcional13-jaRecebido).toFixed(2)}

Total: Valores pendentes + 13º pendente = R$ ${((proporcional13-jaRecebido) + (proporcionalDiasCalc - valoresIndevidos)).toFixed(2)}

Cabe ressaltar que este valor será recalculado e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado.	

Atenciosamente,`;

}

}


if (ressalvas[0].checked){

    resposta.innerHTML += `\n\nCabe ressaltar que embora existam resíduos a serem pagos, também existem valores pagos indevidamente, o que acarretará na realização de acerto de contas quando o requerimento dos valores for realizado pelos interessados.

Atenciosamente,
    `
} else if (ressalvas[1].checked) {
    
    resposta.innerHTML += `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.

Atenciosamente,
    `
} else if(ressalvas[2].checked) {
    resposta.innerHTML += `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.
    
Atenciosamente,
    `
} else if(ressalvas[3].checked){

    resposta.innerHTML += `\n\nImportante salientar que o INSS realiza a concessão e administração de benefícios através de sistemas próprios e não tem acesso aos dados bancários/financeiros do segurado, cabendo ao agente bancário esta competência.

Atenciosamente,
`
} else if(ressalvas[4].checked){
    resposta.innerHTML += `\n\nNeste caso, como houve recebimento pós-óbito, o processo será encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração das competências e valores recebidos após o óbito do segurado.
    ` 
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
      `
 
  } else if(situacao[1].checked) {
    
      resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar a seguinte situação referente os contratos efetuados entre o segurado ${segurado} e o(s) agente(s) financeiro(s): 

           
Atenciosamente,
      `  
      
  } else if(situacao[2].checked){

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o agente financeiro efetuou a exclusão da consignação no benefício do Sr.(a) ${segurado} conforme segue:
    q
      
Atenciosamente,
      `  

  } else if(situacao[3].checked) {

    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o INSS efetuou a suspensão da consignação conforme determinação.
    

Atenciosamente,

    `
  } else if (situacao[4].checked) {
    
    resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível analisar o histórico completo de consignações efetuadas pelos agentes financeiros no cadastro do segurado(a) ${segurado}.

   `     
  } else if (ressalva[0].checked) {
      resposta.innerHTML += `\n\nRessaltamos que o INSS trata da concessão e manutenção de benefícios previdenciários, não dispondo assim dos detalhes contratuais firmados entre o segurado e o agente bancário responsável pela consignação. 
            
      Atenciosamente,
            `
    } else if(ressalva[1].checked){
    resposta.innerHTML += `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.

    Atenciosamente,
          `
    } else if(ressalva[2].checked){
    
    resposta.innerHTML += `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.
            
      Atenciosamente,
            `
  }

}

//Final da página de Consignações

//Início da página de P.A

function respostaPA() {
    const processo = document.querySelector("#PA_processo").value;

    const segurado = document.querySelector("#PA_segurado_nome").value;

    const tarefa = document.querySelector("#tarefa").value;

    // let situacao = document.getElementsByClassName("radio");

    let resposta = document.getElementById("vinculos_textarea");

    let assunto = document.getElementById("vinculos_assunto_email");
    
    assunto.innerHTML = `Ofício - Processo ${processo} - ${segurado}`;
    
        
        resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que foi aberta a tarefa de nº ${tarefa} para implantação da referida Pensão Alimentícia. O andamento deste protocolo poderá ser acompanhado pelo(s) interessado(s) através do site gov.br/inss, do aplicativo 'Meu INSS' ou através do telefone 135.
        
Atenciosamente,
        
        `

}

//Final da página de P.A

//Início do Script de Mandado de Segurança

function resposta_ms() {

  let nome = document.querySelector("#ms_nome").value;

  let beneficio = document.querySelector("#ms_nb").value;

  let situacao = document.getElementsByClassName("radio_ms");

  let agendamento = document.getElementById("ms_agendamento").value;

  let horario = document.querySelector("#ms_horario").value;

  let aps = document.querySelector("#ms_aps").value;

  let resposta = document.querySelector("#ms_textarea");
  
  
  //Problema no PP

  if (situacao[0].checked) {
  resposta.innerHTML = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que não conseguiu realizar o agendamento de Perícia de Prorrogação dentro do prazo e teve seu benefício nº ${beneficio} indevidamente cessado. 
  
2. Situação resolvida e perícia agendada para o dia ${agendamento} às ${horario} na APS ${aps}.
  
3. O benefício foi reativado e já consta o cálculo dos pagamentos pendentes conforme relatório anexo. `

  //Finalização de Análise  

} else if(situacao[1].checked){

  resposta.innerHTML = `1. Trata-se de Mandado de Segurança determinando a finalização da análise do benefício 7090285392 em até 30 dias após o cumprimento das exigências por parte do(a) segurado(a) Eliana dos Santos Franca.  

  2. A exigência solicitava atualização no Cadúnico, além de outros documentos complementares, e foi realizada em 21/11/2020.
  
  3. Em 15/01/2021 o procurador do(a) segurado(a) fez um pedido de dilação do prazo da exigência.
  
  4. Em 02/03/2021 o requerimento foi indeferido, tendo em vista que não houve manifestação do(a) segurado(a) referente o cumprimento da exigência pendente há mais de 100 dias.
  
  5. Importante ressaltar a ciência do(a) segurado(a) e/ou seu procurador, tendo em vista os constantes acessos ao processo digital registrados no sistema GET.`


  //Alguma situação
} else if(situacao[2].checked){

  resposta.innerHTML = `1. Trata-se de Mandado de Segurança solicitando mais informações sobre o caso do(a) segurado(a) ${nome}. determinando a finalização da análise do benefício 7090285392 em até 30 dias após o cumprimento das exigências por parte do(a) segurado(a) Eliana dos Santos Franca.  

  2. A exigência solicitava atualização no Cadúnico, além de outros documentos complementares, e foi realizada em 21/11/2020.
  
  3. Em 15/01/2021 o procurador do(a) segurado(a) fez um pedido de dilação do prazo da exigência.
  
  4. Em 02/03/2021 o requerimento foi indeferido, tendo em vista que não houve manifestação do(a) segurado(a) referente o cumprimento da exigência pendente há mais de 100 dias.
  
  5. Importante ressaltar a ciência do(a) segurado(a) e/ou seu procurador, tendo em vista os constantes acessos ao processo digital registrados no sistema GET.`


  //Outra situação
} else if(situacao[3].checked){
  resposta.innerHTML = `Outra situação`
}

}
    

//Final de Mandado de Segurança