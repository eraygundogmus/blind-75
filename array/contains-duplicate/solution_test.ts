import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";
import containsDuplicate from "./solution.ts";
import containsDuplicateTwo from "./solution-two.ts";


Deno.test("test case 1", () => {
  const array = [1, 2, 3, 1];
  const result = containsDuplicate(array);
  const resultTwo = containsDuplicateTwo(array);
  assertEquals(result, true, "Solution 1 failed");
  assertEquals(resultTwo, true, "Solution 2 is failed");
});

Deno.test("test case 2", () => {
  const array = [1, 2, 3, 4];
  const result = containsDuplicate(array);
  const resultTwo = containsDuplicateTwo(array);
  assertEquals(result, false, "Solution 1 failed");
  assertEquals(resultTwo, false, "Solution 2 is failed");
});

Deno.test("test case 3", () => {
  const array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  const result = containsDuplicate(array);
  const resultTwo = containsDuplicateTwo(array);
  assertEquals(result, true, "Solution 1 failed");
  assertEquals(resultTwo, true, "Solution 2 is failed");
});
