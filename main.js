function insertText(character) {
    document.getElementById("caixadetexto").value += character;
  }
const substantivos = ["carro", "amigo", "sonho", "ideia", "pizza", "sabor", "tigre", "verde", "serra", "voces", "praia", "fraco", "pedra", "vazio", "tampa"];
const indexAleatorio = Math.floor(Math.random() * substantivos.length);
function gerarSubstantivoAleatorio() {
    const substantivoAleatorio = substantivos[indexAleatorio];
    console.log(substantivoAleatorio)
  }
gerarSubstantivoAleatorio();