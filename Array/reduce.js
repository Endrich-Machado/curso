const numeros = [1,2,13,14,5,16,7,8,19,12,10,9];

const total = numeros.reduce(function(acumulador, valor){
  if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);

//( acumulador, valor, indice, array)

console.log(total)