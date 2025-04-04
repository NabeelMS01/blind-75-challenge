/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      if (maxProfit < profit) {
        maxProfit = profit;
      }
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};

console.log(maxProfit([3, 2, 5, 6, 7, 3]));
