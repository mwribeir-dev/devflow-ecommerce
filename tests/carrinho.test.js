import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularTotal, aplicarDesconto } from "../src/carrinho.js";

test("calcula o total do carrinho", () => {
  const itens = [
    { preco: 50, quantidade: 2 },
    { preco: 30, quantidade: 1 },
  ];
  assert.equal(calcularTotal(itens), 130);
});

test("carrinho vazio tem total zero", () => {
  assert.equal(calcularTotal([]), 0);
});

test("aplica 10% de desconto", () => {
  assert.equal(aplicarDesconto(100, 10), 90);
});

test("recusa desconto inválido", () => {
  assert.throws(() => aplicarDesconto(100, 150));
});
