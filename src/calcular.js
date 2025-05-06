// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function Calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      if (numero2 === 0) {
        return "Erro: divisão por zero";
      }
      return numero1 / numero2;
    default:
      return "Operação inválida";
  }
}






//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };