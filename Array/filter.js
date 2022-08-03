//filtra o Array sempre retorna um array


const numeros = [1,2,13,14,5,16,7,8,19,12,10,9];

const arr1 = numeros.filter(valor => valor > 9 );

console.log(arr1);

const cadastro = [
    {nome: "Luis", idade: 30},
    {nome: "fernando", idade: 32},
    {nome: "Lucas", idade: 33},
    {nome: "Paulo", idade: 50},
    {nome: "José", idade: 24},
    {nome: "João", idade: 23},
    {nome: "laura", idade: 15},
];
const cadastro1 = cadastro.filter(valor =>  valor.idade > 25);
console.log(cadastro1)

const validaNome = cadastro.filter(valor => valor.nome.toLowerCase().endsWith('o'));

console.log(validaNome);

