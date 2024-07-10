//let titulo = document.querySelector("h1");
//titulo.innerHTML= "Juego del número secreto";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número del 1 al 10";

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numerodeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroSecreto);
      //console.log(intentos);

    if(numerodeUsuario===numeroSecreto){
        asignarTextoElemento(`p`,`acertaste el número en ${intentos} ${(intentos===1)? `vez` :`veces`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
       if(numerodeUsuario>numeroSecreto){
            asignarTextoElemento("p","el número es menor");  
        }else{
            asignarTextoElemento("p","el número es mayor");

        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value='';

}

function generaNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si el numero generado esta en la lista,hacemos una opetracion o hacemos otra
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento("p","ya se asignaron todos los numeros posibles");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    


}

condicionesIniciales();