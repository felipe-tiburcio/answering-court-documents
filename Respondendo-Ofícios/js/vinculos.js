function respostas() {
    var processo = document.querySelector("#vinculos_processo").value;

    var segurado = document.querySelector("#vinculos_nome").value;

    var empresa = document.querySelector("#vinculos_empresa").value;
    
    var inicio = document.querySelector("#vinculos_data_inicio").value;

    var situacao = document.querySelector("#vinculos_true").checked;

    var assunto_email = document.querySelector("#assunto_email");

    assunto_email.innerHTML = `Ofício - Processo ${processo} - ${segurado}`

    var resposta = document.querySelector("#vinculos_text_area");



    
    if (situacao === true) {
        
       resposta.innerHTML = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o segurado ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${inicio}.`;    

    } else {
        resposta.innerHTML=`Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não consta nenhum vínculo ativo no cadastro do segurado ${segurado}.`

    };
};

// respostas();