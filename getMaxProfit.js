/* https://www.interviewcake.com/question/javascript/stock-price */

const getMaxProfit = stockPrices => {
  const length = stockPrices.length;
  if (length < 2) throw new Error('Getting a profit requires at least 2 prices');

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < length; i++) {
    const currPrice = stockPrices[i];
    const currProfit = currPrice - minPrice;
    maxProfit = Math.max(maxProfit, currProfit);
    minPrice = Math.min(minPrice, currPrice);
  }

  return maxProfit;
};

console.log(getMaxProfit([10, 7, 5, 8, 11, 9])); // 6
console.log(getMaxProfit([10, 7, 5, 3, 2, 1])); // -1