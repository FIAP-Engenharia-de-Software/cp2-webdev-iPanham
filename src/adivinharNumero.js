// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  // Gera um número aleatório entre 0 e max (inclusive)
  const numeroAleatorio = Math.floor(Math.random() * (max + 1));

  // Verifica se o palpite está correto
  if (palpite === numeroAleatorio) {
    return "Acertou!";
  } else {
    return "Errou!";
  }
}

// Exemplo de uso:
const numeroMaximo = 10;
const palpiteDoUsuario = 5;
const resultado = adivinharNumero(numeroMaximo, palpiteDoUsuario);
console.log(resultado);


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };