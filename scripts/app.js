let amigos = [];

/* Adiciona o nome de um amigo à lista */
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado!");
    input.value = "";
    atualizarBotaoAdicionar();
    return;
  }

  amigos.push(nome);

  input.value = "";

  atualizarLista();
  atualizarBotaoSortear();
  atualizarBotaoAdicionar();
}

/* Atualiza a lista exibida de amigos */
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = nome;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "button-remove";
    botaoRemover.onclick = () => removerAmigo(index);

    li.appendChild(botaoRemover);
    lista.appendChild(li);
  });
}

/* Remove um amigo da lista */
function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
  atualizarBotaoSortear();

  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "";
  }
}

/* Atualiza o estado do botão de sortear */
function atualizarBotaoSortear() {
  const botaoSortear = document.querySelector(".button-draw");
  botaoSortear.disabled = amigos.length === 0;
}

/* Atualiza o estado do botão de adicionar */
function atualizarBotaoAdicionar() {
  const input = document.getElementById("amigo");
  const botaoAdicionar = document.querySelector(".button-add");
  botaoAdicionar.disabled = input.value.trim() === "";
}

/* Realiza o sorteio aleatório de um amigo */
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `
        <li class="resultado-item">
            <strong>🎉 O amigo secreto sorteado é: ${amigoSorteado}!</strong>
        </li>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("amigo");

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      adicionarAmigo();
    }
  });

  input.addEventListener("input", function () {
    atualizarBotaoAdicionar();
  });

  atualizarBotaoSortear();
  atualizarBotaoAdicionar();
});
