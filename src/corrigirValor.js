// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  const numero = Number(valor);

  if (isNaN(numero)) {
    return "Valor inválido";
  }

  return numero;
}

console.log(corrigirValor("12.5"));   // Saída: 12.5
console.log(corrigirValor("abc"));    // Saída: Valor inválido
console.log(corrigirValor(5));        // Saída: 5
console.log(corrigirValor(""));       // Saída: Valor inválido

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };