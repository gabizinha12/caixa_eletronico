function caixaEletronico(index) {
  let saque = document.getElementById("saque").value;
  let notasTotal = [2, 5, 10, 20, 50, 100, 200];
  var result = "<br>Quantidade de notas" + "<br>";
  let ident = false;

  for (i = index; i < notasTotal.length; i++) {
    if (saque <= 1000 && saque % 200 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else if (saque <= 1000 && saque % 100 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else if (saque <= 1000 && saque % 50 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else if (saque <= 1000 && saque % 20 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else if (saque <= 1000 && saque % 10 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else if (saque <= 1000 && saque % 5 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else if (saque <= 1000 && saque % 2 == 0) {
      if (saque >= notasTotal[i]) {
        result =
          result +
          parseInt(saque / notasTotal[i]) +
          " Nota(s) de R$ " +
          notasTotal[i] +
          "<br>";
        ident = true;
        saque = saque % notasTotal[i];
      }
    } else {
      ident = false;
      break;
    }
    if (ident == true) {
      document.getElementById("calculoNotas").innerHTML =
        `<p>${result}</p>` + "<br>";
    } else if (saque > 1000) {
      document.getElementById("calculoNotas").innerHTML;
      ("<p>O valor máximo para o saque é de R$ 1000</p>");
    } else if (saque < 1) {
      document.getElementById("calculoNotas").innerHTML =
        "<p> Valor mínimo para saque é R$ 2.00</p>";
    }
    break;
  }
}
