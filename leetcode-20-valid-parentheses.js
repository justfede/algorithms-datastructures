/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    20. Valid Parentheses

    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:
        Input: "()"
        Output: true
    Example 2:
        Input: "()[]{}"
        Output: true
    Example 3:
        Input: "(]"
        Output: false
    Example 4:
        Input: "([)]"
        Output: false

    Solution Big-O: 
        Time Complexity: O(n)

*/

let input = "([)]";

const solution = (input) => {
    let mapOpen = new Map();
    mapOpen.set("(",")");
    mapOpen.set("{","}");
    mapOpen.set("[","]");

    let mapClosed = new Map();
    mapClosed.set(")","(");
    mapClosed.set("}","{");
    mapClosed.set("]","[");

    let stack = [];

    for (let i = 0; i < input.length ; i++){
        if (mapOpen.has(input[i])) stack.push(input[i]);

        if (mapClosed.has(input[i]) && stack[stack.length -1] == mapClosed.get(input[i])){
            stack.pop();
        }
    }

    return stack.length == 0;
}

console.log(solution(input));