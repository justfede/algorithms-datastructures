/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    215. Kth Largest Element in an Array

    Find the kth largest element in an unsorted array. 
    
    Note that it is the kth largest element in the sorted order, not the kth distinct element.

    Example 1:
        Input: [3,2,1,5,6,4] and k = 2
        Output: 5
    
    Example 2:
        Input: [3,2,3,1,2,4,5,5,6] and k = 4
        Output: 4

    
    Solution Big-O:
        O(n) (quick-sort / quick-select)

*/

let input   = [3, 2, 1, 5, 6, 4];
let k       = 2;

const solution = (input, K) => {
    return quickSelect(input, 0, input.length - 1, K);
}

const  swap = (nums, i, j) => {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const quickSelect = (nums, lo, hi, k) => {
    for (var i = lo, j = lo; j < hi; j++) {
        if (nums[j] <= nums[hi]) {
            swap(nums, i++, j);
        }
    }
    swap(nums, i, j);
    let m = hi - i + 1;
    if (m === k) return nums[i];
    if (m > k) return quickSelect(nums, i + 1, hi, k);
    return quickSelect(nums, lo, i - 1, k - m);
};

console.log(solution(input,k));