/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    32. Longest Valid Parentheses

    Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

    Example 1:
        Input: "(()"
        Output: 2
        Explanation: The longest valid parentheses substring is "()"
    
    Example 2:
        Input: ")()())"
        Output: 4
        Explanation: The longest valid parentheses substring is "()()"


    Solution Big-O: 
        Time Complexity: O(n)

*/

let input = ")()()";

const solution = (input) => {

    if (!input || !input.length) return 0;
    
    const invalids  = new Set();
    const stack     = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            stack.push(i);
        } else {
            if (stack.length) {
                stack.pop();
            } else {
                invalids.add(i);
            }
        }
    }

    while (stack.length) {
        invalids.add(stack.pop());
    }
    
    let max = 0, count = 0;
    for (let i = 0; i <= input.length; i++) {
        if (i < input.length && !invalids.has(i)) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    return max;
};

console.log(solution(input));