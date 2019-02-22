/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    75. Sort Colors

    Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
    Note: You are not suppose to use the library's sort function for this problem.

    Example:
        Input: [2,0,2,1,1,0]
        Output: [0,0,1,1,2,2]

    Solution Big-O: 
        Time Complexity: O(n)
*/

let nums = [2,0,2,1,1,0];

const sortColors = (nums) => {
    let map     = new Map();
    let counter = 0;

    for (let i = 0; i < nums.length; i++)
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);

    for (let j = 0 ; j <= 2; j++){
        while (map.get(j) > 0){
            map.set(j, map.get(j) - 1);
            nums[counter++] = j;
        }    
    }
    
    return nums;
};

console.log(sortColors(nums));