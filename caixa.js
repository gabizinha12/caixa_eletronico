function caixaEletronico(index) {
  let saque = document.getElementById("saque").value;
  let notasTotal = [200, 100, 50, 20, 10, 5, 2];
  var result = "<br>Quantidade de notas" + "<br>";
  if (saque > 1000) {
    document.getElementById("calculoNotas").innerHTML =
      "<p>O valor máximo para o saque é de R$ 1000</p>";
    return;
  }

  console.log("A partir de " + notasTotal[index]);

  for (i = index; i < notasTotal.length; i++) {
    if (parseInt(saque / notasTotal[i]) > 0) {
      result +=
        parseInt(saque / notasTotal[i]) +
        " Nota(s) de R$ " +
        notasTotal[i] +
        "<br>";
      saque = saque % notasTotal[i];
    }
  }

  if (saque == 0) {
    document.getElementById("calculoNotas").innerHTML =
      "<p>${result}</p>" + "<br>";
  } else if (index < notasTotal.length) {
    caixaEletronico(index + 1);
  } else {
    document.getElementById("calculoNotas").innerHTML =
      "<p>Não temos troco pra " + saque + " por falta de nota de 1 real</p>";
  }
}
