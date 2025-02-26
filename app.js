// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
   let nombreingresado = document.getElementById('amigo').value;
   if(nombreingresado != "") {
        amigos.push(nombreingresado);
        limpiarCaja();
    }else{
        alert('Por favor inserte un nombre');
   }
console.log(amigos);
crearLista(amigos);
}

function sortearAmigo() {
    if(amigos.length != 0){
      let indiceAleatorio = generarNumeroIndice();
      console.log(indiceAleatorio);
      console.log(amigos[indiceAleatorio-1]);
      let resultadoFinal = document.getElementById('resultado');
      resultadoFinal.innerHTML = amigos[indiceAleatorio-1];
    }else{
        alert('Lista de amigos vacia')
    }    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}

function crearLista(parametro){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    for (let i = 0; i < parametro.length; i++) {
        const item = document.createElement("li");
        item.textContent = parametro[i];
        listaAmigos.append(item);
    }
}

function generarNumeroIndice () {
    let numeroIndice = Math.floor(Math.random()*amigos.length)+1;
    return numeroIndice;
}

