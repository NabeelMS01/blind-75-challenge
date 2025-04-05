var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

   
  }
return -1;
};

 



console.log(search([-1, 0, 3, 5, 9, 12,13,14,15,16,17], 3));
