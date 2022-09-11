type TypeReturnValue = number[];
function twoSum(nums: number[], target: number): TypeReturnValue {
  interface NumsObjectType {
    [key: number]: number;
  }
  let numsAsAnObject: NumsObjectType = { ...nums };

  let firstKey, secondKey;
  for (let i = 0; i < nums.length; i++) {
    let diff = target - numsAsAnObject[i];
    firstKey = Object.keys(numsAsAnObject).find(
      (key) => numsAsAnObject[key] === diff
    );
    secondKey = Object.keys(numsAsAnObject).find(
      (key) => numsAsAnObject[key] + diff === target && key !== firstKey
    );
    if (secondKey && nums[secondKey] + nums[firstKey] === target) break;
  }

  const result = [parseInt(firstKey), parseInt(secondKey)].sort();

  return result;
}
