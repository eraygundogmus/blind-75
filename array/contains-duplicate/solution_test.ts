import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import containsDuplicate from "./solution.ts";

Deno.test("test case 1", () => {
  const array = [1, 2, 3, 1];
  const result = containsDuplicate(array);
  assertEquals(result, true);
});

Deno.test("test case 2", () => {
  const array = [1, 2, 3, 4];
  const result = containsDuplicate(array);
  assertEquals(result, false);
});

Deno.test("test case 3", () => {
  const array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  const result = containsDuplicate(array);
  assertEquals(result, true);
});
