//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = document.getElementById('listaAmigos')
    lista.innerHTML = amigos

function adicionarAmigo() {
    let campo = document.getElementById('amigo').value

    if (campo == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(campo)
        limparCampo()
    }

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = amigos
}


function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = ''
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

for ( i = 0; i < amigos.length; i++) {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigos[i];
    lista.appendChild(itemLista);
}



function sortearAmigo() {
    if ( amigos == ''){
        alert('Insira um nome na lista');
    } else {
        let nomeAleatorio = Math.floor(Math.random() * amigos.length);
        document.getElementById('resultado').innerHTML = (`O número sorteado é ${amigos[nomeAleatorio]}!`);
    }
    atualizarLista()
    amigos = []
}