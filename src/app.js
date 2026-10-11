import { calcularTotal, aplicarDesconto } from "./carrinho.js";

const produtos = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Boné", preco: 30, quantidade: 1 },
];

const lista = document.getElementById("lista");
produtos.forEach((p) => {
  const li = document.createElement("li");
  li.textContent = `${p.nome} - R$ ${p.preco} x ${p.quantidade}`;
  lista.appendChild(li);
});

const total = calcularTotal(produtos);
document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
document.getElementById("desconto").textContent =
  `Com 10% de desconto: R$ ${aplicarDesconto(total, 10).toFixed(2)}`;
