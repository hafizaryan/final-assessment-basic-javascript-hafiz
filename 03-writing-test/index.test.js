// index.test.js

import { test } from "node:test";
import { strict as assert } from "assert";
import { sum } from "./index.js";

test("sum function", (t) => {
  t.test("sums numbers correctly", () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
  });
});
