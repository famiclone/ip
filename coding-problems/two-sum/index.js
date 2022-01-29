/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];

    if (cache[x] !== undefined) {
      return [cache[x], i];
    }

    cache[nums[i]] = i;
  }

  return null;
};

module.exports = twoSum;
