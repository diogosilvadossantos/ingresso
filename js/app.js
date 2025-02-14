function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let qtd = parseInt(document.getElementById("qtd").value);

  if (isNaN(qtd) || qtd <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  if (tipo.value === "pista") {
    comprarPista(qtd);
  } else if (tipo.value == "inferior") {
    comprarInferior(qtd);
  } else {
    comprarSuperior(qtd);
  }
}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  if (qtd > qtdPista) {
    alert("Quantidade de ingressos indisponível");
  } else {
    qtdPista = qtdPista - qtd;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Ingresso(s) comprado(s) com sucesso!");
  }
}

function comprarInferior(qtd) {
  let qtdinferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );
  if (qtd > qtdinferior) {
    alert("Quantidade de ingressos indisponível");
  } else {
    qtdinferior = qtdinferior - qtd;
    document.getElementById("qtd-inferior").textContent = qtdinferior;
    alert("Ingresso(s) comprado(s) com sucesso!");
  }
}

function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  if (qtd > qtdSuperior) {
    alert("Quantidade de ingressos indisponível");
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("Ingresso(s) comprado(s) com sucesso!");
  }
}
