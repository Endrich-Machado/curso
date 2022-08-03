const relogio = document.querySelector('.relogio');
const modalContainer = document.querySelector(".modal-container");
const horas = document.querySelector('.horas');
const cronometro = document.querySelector('.cronometro');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');
let segundos = 0;
let timer;
let data = new Date();
let HoraAtual = new Date();


let cronus = segundos =>{
     data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br',{
        hour12: false,
        timeZone: 'UTC'
    })
}

horas.addEventListener('click', () => {   
    modalContainer.classList.add("show");
    relogio.innerHTML = HoraAtual.toLocaleTimeString('pt-BR',{hour12: false});
})

zerar.addEventListener('click', () => {    
    modalContainer.classList.add("show");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
})

cronometro.addEventListener('click', () => {   
    modalContainer.classList.add("show"); 
    clearInterval(timer);
    timer = setInterval(()=>{
    segundos++;
    relogio.innerHTML = cronus(segundos)}, 1000)
})

pausar.addEventListener('click', () => {  
    clearInterval(timer);
    modalContainer.classList.add("show");
})