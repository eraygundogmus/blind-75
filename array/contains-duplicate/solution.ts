export default function containsDuplicate(nums: number[]): boolean {
  let condition = false;
  for (let i = 0; i < nums.length; i++) {
    condition = nums.filter((num) => num === nums[i]).length > 1 ? true : false;
    if (condition) break;
  }

  return condition;
}
