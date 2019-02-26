/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    322. Coin Change

    You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.   
    
    Example 1:
        Input: coins = [1, 2, 5], amount = 11
        Output: 3 
        Explanation: 11 = 5 + 5 + 1
    Example 2:
        Input: coins = [2], amount = 3
        Output: -1
        
    Solution Big-O: 
        Time Complexity: O(amout * coins) (using dynamic programming)        

*/

let coins   = [2];
let amount  = 3;

const solution = (coins, amount) => {
    const dp = new Array(amount + 1);
    dp.fill(Number.MAX_SAFE_INTEGER)[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
} 

console.log(solution(coins,amount));