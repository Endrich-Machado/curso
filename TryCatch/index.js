function somar(x,y){
    if(
        typeof x !== 'number' ||
        typeof x !== 'number' 
    ){
        throw new Error('x and y need to be numbers'); // referenceError
    }
    return x + y;
}
try{
    console.log(somar(15,10)); //Executada quando não há erros.
}catch(e){
    console.log("need to parse number"); //Executada quando há erros.    
}finally{
    console.log("sempre é executado o bloco finally");

}