import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import maxProduct from "./solution.ts";

Deno.test("test case 1", () => {
  const array = [2, 3, -2, 4];
  const result = maxProduct(array);
  assertEquals(result, 6);
});
