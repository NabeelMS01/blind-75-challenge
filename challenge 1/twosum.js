function twoSum(nums, target) {
  var prevHash = new Map();
  for (var i = 0; i < nums.length; i++) {
    var reminder = target - nums[i];
    if (prevHash.has(reminder)) {
      return [prevHash.get(reminder), i];
    }
    prevHash.set(nums[i], i);
  }
  return [];
}
console.log(twoSum([3, 5, 5, 6, 4, 8, 9], 9));
