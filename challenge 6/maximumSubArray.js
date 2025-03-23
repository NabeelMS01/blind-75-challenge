var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let num of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum = currentSum + num;
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([5, 2, 1, -1, -5, 6, 2, -5, -7]));
