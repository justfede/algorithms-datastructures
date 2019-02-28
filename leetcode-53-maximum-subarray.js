/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    53. Maximum Subarray

    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Example:
        Input: [-2,1,-3,4,-1,2,1,-5,4],
        Output: 6
        Explanation: [4,-1,2,1] has the largest sum = 6.

    Solution Big-O:
        Time Complexity: O(n). Using Kadane's algorithm.
*/

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const solution = (input) => {
    let sum     = input[0];
    let maxSum  = sum;

    for (let i = 0; i < input.length; i++){
        sum = Math.max(input[i], sum + input[i]);
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
}


console.log(solution(input));