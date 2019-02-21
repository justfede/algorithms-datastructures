/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    3. Longest Substring Without Repeating Characters

    Given a string, find the length of the longest substring without repeating characters.

    Example 1:
        Input: "abcabcbb"
        Output: 3 
        Explanation: The answer is "abc", with the length of 3. 
    Example 2:
        Input: "bbbbb"
        Output: 1
        Explanation: The answer is "b", with the length of 1.

    Solution Big-O: 
        Time Complexity: O(n)
        Space Complexity: O(n)

*/

let input = 'abcabcbb';

const solution = (input) => {

    let seen        = new Map();
    let maxLength   = currentLength = 0;

    for (let i = 0; i < input.length ; i++){
        if (seen.has(input[i])){
            maxLength = Math.max(currentLength, maxLength);
            seen.clear();
            currentLength = 0;
        }else{
            currentLength++;
            seen.set(input[i]);
        }
    }

    return Math.max(currentLength, maxLength);
}

console.log(solution(input));