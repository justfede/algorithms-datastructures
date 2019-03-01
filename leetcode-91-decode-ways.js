/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    91. Decode Ways

    A message containing letters from A-Z is being encoded to numbers using the following mapping:

        'A' -> 1
        'B' -> 2
        ...
        'Z' -> 26
        
        Given a non-empty string containing only digits, determine the total number of ways to decode it.

        Example 1:
            Input: "12"
            Output: 2
            Explanation: It could be decoded as "AB" (1 2) or "L" (12).

        Example 2:
            Input: "226"
            Output: 3
            Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

        Solution Big-O: 
            Time Complexity: O(n). DP

*/

let input = '12';

const solution = (input) => {

    if (!input || input[0] == '0') return 0;
    
    let dp = new Array(input.length + 1).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= input.length; i++) {
        let c = input[i - 1], p = input[i - 2], n = parseInt(p + c);
        if (c !== '0')dp[i] += dp[i - 1]; 
        if (p !== '0' && n <= 26) dp[i] += Math.max(dp[i - 2], 1); 
        if (dp[i] == 0) return 0;
    }
    
    return dp[input.length];
}

console.log(solution(input));