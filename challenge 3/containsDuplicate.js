function containsDuplicate(nums) {
  let map = new Set();

  for (let num of nums) {
    if (map.has(num)) {
      return true;
    } else {
      map.add(num);
    }
  }
  return false;
}


console.log(containsDuplicate([3,2,5,1]));
