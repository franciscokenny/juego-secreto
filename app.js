let numerosecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo = 10;

function asignartextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //esto seria para llamar a h1
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento() {
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
    
    // console.log que muestre en la consola el valor F12
    // triple = es igual en valor e igual en tipo de datos
    console.log(intentos);

    if(numerodeusuario === numerosecreto) {
       asignartextoelemento("p",`Acertaste el número, en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`); //tenemos un if(?) "..." else(:) "..."
       document.getElementById("reiniciar").removeAttribute("disabled"); //habilita boton nuevo juego
    }  else {
            if (numerodeusuario > numerosecreto){
                asignartextoelemento("p","El número es menor");
            } else {
                asignartextoelemento("p","El número es mayor");
            }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){ //limpia la caja de donde se escribe el valor
document.querySelector("#valorusuario").value = "";

}

function generarnumerosecreto() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(numerogenerado);
    console.log(listanumerossorteados);
    //ya sorteamos todos los numeros?
    if(listanumerossorteados.length == numeromaximo){
        asignartextoelemento("p","Ya se sortearon todos los números posibles!");
        }else {

    // si el numero generado esta en incluido en la lista
        if(listanumerossorteados.includes(numerogenerado)){
            return generarnumerosecreto();
            }else{
                listanumerossorteados.push(numerogenerado);
                return numerogenerado;
            }
        }
}

function condicionesiniciales() {
    asignartextoelemento("h1","Juego del número secreto!");
    asignartextoelemento("p",`Indica un número del 1 al ${numeromaximo} por favor`); 
    numerosecreto = generarnumerosecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de inicio de intervalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesiniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesiniciales();