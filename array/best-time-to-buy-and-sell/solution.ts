export default function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let sellPrice = prices[i];
    let profit = sellPrice - minPrice;

    maxProfit = Math.max(maxProfit, profit);

    sellPrice < minPrice && (minPrice = sellPrice);
  }

  return maxProfit;
}
