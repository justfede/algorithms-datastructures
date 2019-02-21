/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    1. Two Sum

    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
        [2, 7, 11, 15] , target = 9
        Return: [2, 9];

    
    Solution Big-O: 
        Time Complexity: O(n)
*/

let input   = [2, 7, 11, 15];
let target  = 9;

const solution = (input, target) => {
    let map = new Map();

    for (let i = 0; i < input.length ; i++){
        map.set(input[i], true);
        let need = target - input[i];
        if (map.has(need)) return [need, input[i]];
    }

    return -1;
}

console.log(solution(input,target));