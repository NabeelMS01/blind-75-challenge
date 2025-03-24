var maxProduct = function (nums) {
  let currentMinProduct = 1;
  let currentMaxProduct = 1;
  let result = nums[0];

  for (let num of nums) {
    let temp = currentMaxProduct * num;

    currentMaxProduct = Math.max(temp, currentMinProduct * num, num);
    currentMinProduct = Math.min(temp, currentMinProduct * num, num);

      result = Math.max(result,currentMaxProduct)
      return result
  }
};

console.log(maxProduct([3, 2, -3, 5, -4, 2, 4, 6]));
