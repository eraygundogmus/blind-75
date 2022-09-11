import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import maxSubArray from "./solution.ts";

Deno.test("test case 1", () => {
  const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const result = maxSubArray(array);
  assertEquals(result, 6);
});

Deno.test("test case 2", () => {
  const array = [1];
  const result = maxSubArray(array);
  assertEquals(result, 1);
});
Deno.test("test case 3", () => {
  const array = [5, 4, -1, 7, 8];
  const result = maxSubArray(array);
  assertEquals(result, 23);
});
Deno.test("test case 4", () => {
  const array = [-1];
  const result = maxSubArray(array);
  assertEquals(result, -1);
});
