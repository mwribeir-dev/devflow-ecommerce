// Calcula o total do carrinho: soma (preço x quantidade) de cada item
export function calcularTotal(itens) {
  return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

// Aplica desconto em porcentagem (ex.: 10 = 10%)
export function aplicarDesconto(valor, porcentagem) {
  if (porcentagem < 0 || porcentagem > 100) {
    throw new Error("Desconto inválido");
  }
  return valor - (valor * porcentagem) / 100;
}
