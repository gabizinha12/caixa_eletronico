function eCaixa(saque) {
  if (saque < 1000) { // verifica se o saque é menor que 1000
    return sacarRec(saque, 0);
  } else {
    document.write("Não foi possível sacar este valor");
  }
}

var notas = [100, 50, 20, 10, 5, 2];

function notaMax(valor, index) {
  var i = index;
  while (i < notas.length && notas[i] > valor) { // incrementa o indice e o retorna
  i++;
  }
  return i;
}

function sacarRec(valor, index) {
  var saque = [];

  var indexMax = notaMax(valor, index);

  if (indexMax >= notas.length) {    // se o index maximo for maior ou igual ao tamanho do array notas, retorne o array
    return [];
  }

  for (var i = indexMax; i < notas.length; i++) {
    var resto = valor - notas[i]; // o resto é igual ao valor - o indice de notas

    if (resto == 0) { // caso o resto seja igual a 0 retorne o indice das notas
      return [notas[i]];
    }

    for (var j = i; j < notas.length; j++) {
      var saqueResto = sacarRec(resto, j); // saque o resto e j incrementado

      if (saqueResto.length > 0) { // se o tamanho do resto for maior que 0 adicione elementos novos no array de notas
        saqueResto.unshift(notas[i]);
        return saqueResto; // retorne o resto do saque
      } else if (notas == 3) {  // caso a  nota seja igual a 3 nao saque
        return "Não é possível sacar este valor, não temos notas de 1";
      }
    }
  }

  return []; // retorne o array
}
