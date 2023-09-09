// given an array of prices for a stock, calculate the max profit
// where you have to purchase a stock in one day, and sell it another day
export default function(stocks: number[]) {
  let maxProfit = 0;
  let lowestFound = stocks[0];

  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] < lowestFound) { lowestFound = stocks[i]; }
    let diff = stocks[i] - lowestFound;
    if (diff > maxProfit) { maxProfit = diff; }
  }

  return maxProfit < 0 ? 0 : maxProfit;

}

