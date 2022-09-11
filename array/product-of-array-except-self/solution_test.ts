import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import productExceptSelf from "./solution.ts";

Deno.test("test case 1", () => {
  const array = [1, 2, 3, 4];

  const result = productExceptSelf(array);
  assertEquals(result, [24, 12, 8, 6]);
});

Deno.test("test case 2", () => {
  const array = [-1, 1, 0, -3, 3];
  const result = productExceptSelf(array);
  assertEquals(result, [0, 0, 9, 0, 0]);
});

Deno.test("test case 3", () => {
  const array = [4, 3, 2, 1, 2];
  const result = productExceptSelf(array);
  assertEquals(result, [12, 16, 24, 48, 24]);
});
