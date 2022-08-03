

//construtor de array
// const nomes = new Array("Eduardo", "Maria", "Joao");
//
const nomes = ["Eduardo", "Maria", "Joao", "Pedro", "Alex" ];
// const novoArray = nomes;
// ao efetuar qualquer mudança em ambos os array, eles sofreram as mesmas mudanças simultaneamente, caso acima.
// caso utilize o spredOperator ... o array não serão modificados em conjunto como antes exemplo.
const novoArray = [...nomes];// foi gerado uma cópia de nomes para dentro do novoArray.
console.log(novoArray.length);// tamanho do array // length é um atributo e não um método da classe

const pegaUltimonome = nomes.pop()// pop() remove o ultimo elemento do array.podemos capturar esse elemento removido.
console.log(pegaUltimonome)// 

const pegaPrimeironome = nomes.shift() // shift remove o primeiro elemento do array
console.log(pegaPrimeironome)

nomes.push('Fernando', 'miguel'); // adiciona no fim(Tradicional)
console.log(nomes);

nomes.unshift('Luiza') // adciona no começo

console.log(nomes.slice(0,3))// pega do indice iicial menor que o indice escolhido.caso queira remover diferente (1, -1)o primeiro e ultimo
const nome = "Endrich Machado Assunção" 
const nome1 = nome.split(' '); // converte uma string em um array.
const nome2 = nome1.join(' ');// converte o array em string
console.log(nome2)

delete nomes[1];// vazio
console.log(nomes)