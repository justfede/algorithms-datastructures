/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    88. Merge Sorted Array

    Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:
        - The number of elements initialized in nums1 and nums2 are m and n respectively.
        - You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
    
    Example:
        Input:
            nums1 = [1,2,3,0,0,0], m = 3
            nums2 = [2,5,6],       n = 3
            Output: [1,2,2,3,5,6]

    Solution Big-O: 
        Time Complexity: O(n)

*/

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

const solution = (nums1, m, nums2, n) => {
    let len = m + n;
    m--;
    n--;
    while (len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums2[n--];
        }
    }
}

solution(nums1, m, nums2, n);
console.log(nums1);