/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    35. Search Insert Position

    Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You may assume no duplicates in the array.
        
    Example 1:
        Input: [1,3,5,6], 5
        Output: 2
    
    Example 2:
        Input: [1,3,5,6], 2
        Output: 1

    Example 3:
        Input: [1,3,5,6], 7
        Output: 4

    Example 4:
        Input: [1,3,5,6], 0
        Output: 0    


    Solution Big-O: 
        Time Complexity: Binary Search. O(log n) 
*/

let input   = [1,3,5,6];
let target  = 7;

const solution = (input, target) => {
    let left    = 0;
    let right   = input.length - 1;
    let mid     = 0;

    while (left <= right){
        mid = Math.floor((left + right) / 2 );
        if (input[mid] == target) return mid;

        if (input[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    } 

    return mid + 1;
    
}

console.log(solution(input, target))