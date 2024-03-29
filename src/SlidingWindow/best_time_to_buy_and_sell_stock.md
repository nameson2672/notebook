# Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i th` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0.`

**Example 1:**

```csharp
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```
**Example 2:**
```csharp
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Solution 1:
We track max Profit and min price and we set min price to  max of min price or current price and them maxProfit to subtracting current element minus min price to the max profit. And the max profit we get at the last is the answer.

```csharp
public class Solution {
    public int MaxProfit(int[] prices) {
        int maxProfit = 0;
        int minPrice = prices[0];

        for (int i = 1; i < prices.Length; i++) {
            int currPrice = prices[i];
            minPrice = Math.Min(minPrice, currPrice);
            maxProfit = Math.Max(maxProfit, currPrice - minPrice);
        }
        return maxProfit;
    }
}
```
The time complexity of this problem is `O(n)` 