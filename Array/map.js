//Map criaum novo array e altera os dados
const numeros = [1,2,13,14,5,16,7,8,19,12,10,9];
const numTriplo = numeros.map(valor => valor*3);// (valor, indice, array)
console.log(numTriplo);


const cadastro = [
    {nome: "Luis", idade: 30},
    {nome: "fernando", idade: 32},
    {nome: "Lucas", idade: 33},
    {nome: "Paulo", idade: 50},
    {nome: "José", idade: 24},
    {nome: "João", idade: 23},
    {nome: "laura", idade: 15},
];

const cliente = cadastro.map(valor => valor.nome)
console.log(cliente)