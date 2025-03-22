var productExceptSelf = function (array) {
  let prefix = new Array(array.length).fill(1);
  let postFix = new Array(array.length).fill(1);

  let n = array.length;
  let answers = new Array(n);

  for (let i = 1; i < array.length; i++) {
    prefix[i] = prefix[i - 1] * array[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    postFix[i] = postFix[i + 1] * array[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answers[i] = prefix[i] * postFix[i];
  }
  return answers;
};

console.log(productExceptSelf([1, 2, 3, 4]));
