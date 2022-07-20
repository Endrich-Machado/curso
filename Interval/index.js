function mostrarHora(){
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
setInterval(()=>{
    console.log(mostrarHora())}, 1000);

    setTimeout(()=>{console.log('Fecho')}, 3000);