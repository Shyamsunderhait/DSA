let nums = [2, 7, 11, 15];
let target = 9;
let result = [];
function twoSum(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}
console.log(twoSum(nums));
