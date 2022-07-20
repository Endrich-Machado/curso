const relogio = document.querySelector('.relogio');
const modalContainer = document.querySelector(".modal-container");
const horas = document.querySelector('.horas');
const cronometro = document.querySelector('.cronometro');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');

let data = new Date();

horas.addEventListener('click', () => {    
    modalContainer.classList.add("show");
    relogio.innerHTML = data.toLocaleTimeString('pt-BR',{hour12: false});

})
zerar.addEventListener('click', () => {    
    modalContainer.classList.add("show");
    relogio.innerHTML = "00:00:00";

})
cronometro.addEventListener('click', () => {    
    let cronus = setInterval(()=> {relogio.innerHTML = data}, 10000);
    modalContainer.classList.add("show");

})
pausar.addEventListener('click', () => {  
    setTimeout(() => {clearInterval(cronus)},1000);
    modalContainer.classList.add("show");
})