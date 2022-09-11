import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import maxProfit from "./solution.ts";

Deno.test("test case 1", () => {
  const array = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(array);
  assertEquals(result, 5);
});

Deno.test("test case 2", () => {
  const array = [7, 6, 4, 3, 1];
  const result = maxProfit(array);
  assertEquals(result, 0);
});
