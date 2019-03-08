/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    17. Letter Combinations of a Phone Number

    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
    
    Example:
        Input: "23"
        Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
            
    Solution Big-O:
        Backtracking. 
        Run Time: O(3n×4m) 
*/

let input = "23";

const solution = (input) => {

    const backtracking  = (final, curr) => {
        let ans = [];

        if(final.length === 0){
            for(let q = 0; q < curr.length; q++){
                ans.push(curr.charAt(q)); 
            } 
        }

        for (let j = 0; j < final.length; j++){
            for (let p = 0; p < curr.length; p++){
                ans.push(final[j] + curr.charAt(p)); 
            }
        }

        return ans;
    };

    let array = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let final = [];

    for (let i = 0; i < input.length; i++){

        let curr = parseInt(input.charAt(i));
        let letters = array[curr - 2];

        final = backtracking(final, letters);
    }

    return final;
}

console.log(solution(input));
