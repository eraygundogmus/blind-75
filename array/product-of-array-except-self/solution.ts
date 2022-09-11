export default function productExceptSelf(nums: number[]): number[] {
  const numbersExceptZeros = nums.filter((num) => num !== 0);
  const productExceptZeros = numbersExceptZeros.reduce(
    (acc, cur) => acc * cur,
    1
  );
  const zeroCount = nums.length - numbersExceptZeros.length;

  return nums.map((num) => {
    if (zeroCount > 1) {
      return 0;
    }
    if (zeroCount === 1) {
      return num === 0 ? productExceptZeros : 0;
    }
    return productExceptZeros / num;
  });
}

// Time limit exceed solution

// const map = nums.map((num, mapIndex) => {
//     return nums.reduce((acc, cur, reduceIndex) => {
//       if (mapIndex === reduceIndex) return acc;
//       acc = cur * acc;
//       return acc;
//     }, 1);
//   });

//   return map;
