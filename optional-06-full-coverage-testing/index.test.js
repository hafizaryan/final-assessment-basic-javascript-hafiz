import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// Test case 1: Penjumlahan dua angka positif
test("sum of two positive numbers", () => {
  assert.strictEqual(sum(3, 5), 8); // 3 + 5 = 8
  assert.strictEqual(sum(10, 20), 30); // 10 + 20 = 30
});

// Test case 2: Input bukan angka
test("input is not a number", () => {
  assert.strictEqual(sum("3", 5), 0); // input pertama bukan angka
  assert.strictEqual(sum(3, "5"), 0); // input kedua bukan angka
  assert.strictEqual(sum("a", "b"), 0); // kedua input bukan angka
});

// Test case 3: Input negatif
test("input is a negative number", () => {
  assert.strictEqual(sum(-3, 5), 0); // input pertama negatif
  assert.strictEqual(sum(3, -5), 0); // input kedua negatif
  assert.strictEqual(sum(-3, -5), 0); // kedua input negatif
});

// Test case 4: Input 0
test("input includes zero", () => {
  assert.strictEqual(sum(0, 5), 5); // 0 + 5 = 5
  assert.strictEqual(sum(3, 0), 3); // 3 + 0 = 3
  assert.strictEqual(sum(0, 0), 0); // 0 + 0 = 0
});
