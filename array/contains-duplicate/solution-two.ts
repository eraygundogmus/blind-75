export default function containsDuplicate(nums: number[]): boolean {
    let returnVal = false;
    for(let i=0; i<nums.length; i++) {
        for (let j=i + 1 ; j<nums.length; j++) {
            if (nums[i]== nums[j]) {
                returnVal = true
                break
            }
        }
    }
    return returnVal
};