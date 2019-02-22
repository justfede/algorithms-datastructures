/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    5. Longest Palindromic Substring

    Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    Example 1:
        Input: "babad"
        Output: "bab"
        Note: "aba" is also a valid answer.
    Example 2:
        Input: "cbbd"
        Output: "bb"

        
    Solution Big-O: 
        Time Complexity: O(n2)

*/

let input = 'babad';

const longestPalindrome = (input) => {
    let res = "";
    let cur = "";
    for(let i = 0; i < input.length; i ++){
        for(let j = i; j < i + 2; j ++){
            let left = i;
            let right = j;
            while(input[left] && input[left] === input[right]){
                cur = input.substring(left, right + 1);
                if(cur.length > res.length) res = cur;
                left --;
                right ++;
            }
        }
    }
    return res;
};

console.log(longestPalindrome(input));