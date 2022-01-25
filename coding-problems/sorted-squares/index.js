function sortedSquares(nums) {
  for (let j = 0; j < nums.length; j++) {
    nums[j] = nums[j] ** 2;
    //   for (let i = 0; i < nums.length; i++) {
    //     const n = Math.abs(nums[i]);
    //     const n1 = Math.abs(nums[i + 1]);

    //     if (n > n1) {
    //       nums[i] = n1;
    //       nums[i + 1] = n;
    //     }
    //   }
  }

  console.log(nums);

  return nums;
}

module.exports = sortedSquares;
