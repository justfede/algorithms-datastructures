/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    33. Search in Rotated Sorted Array

    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
    You are given a target value to search. If found in the array return its index, otherwise return -1.
    You may assume no duplicate exists in the array.
    Your algorithm's runtime complexity must be in the order of O(log n).

    Example 1:
        Input: nums = [4,5,6,7,0,1,2], target = 0
        Output: 4

    Example 2:
        Input: nums = [4,5,6,7,0,1,2], target = 3
        Output: -1

    Solution Big-O:
        Time Complexity: O(log(N)) (binary search)
*/

let input   = [4, 5, 6, 7, 0, 1, 2];
let target  = 0;

const solution = (input, target) => {
    let left    = 0;
    let right   = input.length; 

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (input[mid] == target) return mid;

        if (input[left] <= input[mid]){
            if (input[left] <= target && target < input[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }else{
            if (input[mid] < target && target <= input[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

    }

    return -1;
}

console.log(solution(input, target));