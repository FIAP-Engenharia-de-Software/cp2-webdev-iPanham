// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function avaliarNota(nota) {
  if (nota >= 6 && nota <= 10) {
    return "Aprovado";
  } else if (nota >= 1 && nota < 6) {
    return "Reprovado";
  } else {
    return "Nota inválida";
  }
}

// Exemplo de uso
let nota1 = 7;
let nota2 = 4;
let nota3 = 11;


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };