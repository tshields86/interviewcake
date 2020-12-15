/* https://www.interviewcake.com/question/javascript/coin */

/*
Dynamic Programming
Time: O(A * C)
Space: O(A)
*/

const changePossibilities = (amount, coins) => {
  coins.sort((a, b) => a - b);

  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};