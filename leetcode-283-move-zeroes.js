/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    283. Move Zeroes

    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Example:
        Input: [0,1,0,3,12]
        Output: [1,3,12,0,0]

    Solution Big-O: 
        Time Complexity: O(n)

*/

let input = [0, 1, 0, 3, 12];

const solution = (input) => {

    for (let i = 0, j = 0; j < input.length; j++){
        if (input[j] != 0){
            swap(input, i++, j);
        }
    }

    function swap(nums, i, j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    return input;
}

console.log(solution(input));