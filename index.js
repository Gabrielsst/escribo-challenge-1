function verificarDivisibilidade() {
  // Obtém o valor digitado pelo usuário
  let numero = document.getElementById("numeroInput").value;
  let soma = 0;

  // Verifica se o valor é um número
  if (!isNaN(numero) && numero >= 0) {
    // Converte o valor para um número inteiro
    numero = parseInt(numero);

    for(let i = 0; i < numero; i += 3) {
      if (i < numero) {
        soma += i;
      }
    }

    for(let i = 0; i < numero; i += 5) {
      if (i < numero) {
        soma += i;
      }
    }

    document.getElementById("resultado").innerHTML = "A soma dos números menores que " + numero + ", que são divisíveis por 3 e 5 é " + soma + ".";

  } else {
    document.getElementById("resultado").innerHTML = "Por favor, digite um número válido.";
  }
}
