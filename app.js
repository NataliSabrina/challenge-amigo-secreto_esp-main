const inputaAmigo = document.getElementById("amigo");
const listaAmigos = [];
const uLListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    listaAmigos.push(inputaAmigo.value);
   // uLListaAmigos.innerHTML = uLListaAmigos.innerHTML + inputaAmigo.value es igual a lo siguiente:
   uLListaAmigos.innerHTML += `<li>${inputaAmigo.value}</li>` ;
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
   const amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML = `<li> El amigo secreto es:  ${amigoSecreto}</li>`;
}