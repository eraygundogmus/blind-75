import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import twoSum from "./solution.ts";

Deno.test("test case 1", () => {
  const array = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(array, target);
  assertEquals(result, [0, 1]);
});

Deno.test("test case 2", () => {
  const array = [3, 2, 4];
  const target = 6;
  const result = twoSum(array, target);
  assertEquals(result, [1, 2]);
});

Deno.test("test case 3", () => {
  const array = [3, 3];
  const target = 6;
  const result = twoSum(array, target);
  assertEquals(result, [0, 1]);
});
