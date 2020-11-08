function eCaixa(saque) {
  if (saque < 1000) {
    return sacarRec(saque, 0);
  } else {
    document.write("Não foi possível sacar este valor");
  }
}

var notas = [100, 50, 20, 10, 5, 2];

function notaMax(valor, index) {
  var i = index;
  while (i < notas.length && notas[i] > valor) {
    i++;
  }
  return i;
}

function sacarRec(valor, index) {
  var saque = [];

  var indexMax = notaMax(valor, index);

  if (indexMax >= notas.length) {
    return [];
  }

  for (var i = indexMax; i < notas.length; i++) {
    var resto = valor - notas[i];

    if (resto == 0) {
      return [notas[i]];
    }

    for (var j = i; j < notas.length; j++) {
      var saqueResto = sacarRec(resto, j);

      if (saqueResto.length > 0) {
        saqueResto.unshift(notas[i]);
        return saqueResto;
      } else if (notas == 3) {
        return "Não é possível sacar este valor, não temos notas de 1";
      }
    }
  }

  return [];
}
