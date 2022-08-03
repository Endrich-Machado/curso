const nomes = ['Gabriel', "Paulo", "Fernando", "Lucas", "Pedro"];

//nomes.splice(indice, delete quantos elementos)
nomes.splice(1, 2)// removerá o indice 1 e 2 pois estamos pedindo para o mesmo remover 2 indices
// acaso vc queira recuperar o item excluido em uma variavel ele retornará um array como resultado.
console.log(nomes)// resultado [ 'Gabriel', 'Lucas', 'Pedro' ]

nomes.splice(3, 1, "Cutitiba")// esse comando no remove o nome do indice e colocara o nome escolhido.
nomes.splice(1, 0, "Endrich")// adiciona sem remover nada avancando todos 1 casa.

console.log(nomes)

