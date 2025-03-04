// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let nombreDeAmigo = document.getElementById("agregarAmigo").value;
    console.log(nombreDeAmigo);
    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#agregarAmigo').value ='';
}
function asignarTextoElemento (elemento, texto){
    let elementoHTML =document.querySelector (elemento)
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento ('ul', 'hola')
