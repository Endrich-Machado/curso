function dataAtual(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("Espera uma instancia de Date");
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{hour12: false});
}

const hora = dataAtual(12);
console.log(hora);