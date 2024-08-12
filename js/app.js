function comprar() {
    let tipo = document.getElementById("tipo-ingresso");
    let qtdInput = document.getElementById("qtd");
    let qtd = parseInt(qtdInput.value);

    // Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        atualizarMensagemCompra("Por favor, insira uma quantidade válida.", "erro");
        qtdInput.value = "";
        return;
        
    }
    
    if(tipo.value === "pista") {
        comprarPista(qtd);
    }

    if(tipo.value === "inferior") {
        comprarInferior(qtd);
    }

    if(tipo.value === "superior") {
        comprarSuperior(qtd);
    }

    // Limpa o campo de quantidade após a operação
    qtdInput.value = "";
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista){
        atualizarMensagemCompra("Quantidade indisponível para pista.", "erro");
    } else {
        qtdPista -= qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        atualizarMensagemCompra("Compra realizada com sucesso!", "sucesso");
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtd > qtdInferior){
        atualizarMensagemCompra("Quantidade indisponível para cadeira inferior.", "erro");
    } else {
        qtdInferior -= qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        atualizarMensagemCompra("Compra realizada com sucesso!", "sucesso");
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtd > qtdSuperior){
        atualizarMensagemCompra("Quantidade indisponível para cadeira superior.", "erro");
    } else {
        qtdSuperior -= qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        atualizarMensagemCompra("Compra realizada com sucesso!", "sucesso");
    }
}


function atualizarMensagemCompra(mensagem, tipo) {
    let mensagemCompraDiv = document.getElementById("mensagem-compra");

    // Limpa as classes anteriores
    mensagemCompraDiv.className = "mensagem-compra";

    // Adiciona a classe conforme o tipo de mensagem
    if (tipo === "sucesso") {
        mensagemCompraDiv.classList.add("sucesso");
    } else if (tipo === "erro") {
        mensagemCompraDiv.classList.add("erro");
    }
    
    // Atualiza o texto da mensagem
    mensagemCompraDiv.textContent = mensagem;
    
    // Exibe a mensagem adicionando a classe 'mostrar'
    mensagemCompraDiv.classList.add("mostrar");
}
