/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    347. Top K Frequent Elements

    Given a non-empty array of integers, return the k most frequent elements.

    Example 1:
        Input: nums = [1,1,1,2,2,3], k = 2
        Output: [1,2]
    Example 2:
        Input: nums = [1], k = 1
        Output: [1]

    Solution Big-O: 
        Time Complexity: O(n) (bucket sort)
*/  

const topKFrequent = (nums, k) => {
    let ans = [];
    let map = new Map();

    if (!nums) return ans;

    for (var i = 0; i < nums.length; i ++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let bucket = new Array(nums.length + 1).fill(null).map( () => []);

    for (let [num,freq] of map){
        bucket[freq].push(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        for (let j = 0; j < bucket[i].length; j++) {
            ans.push(bucket[i][j]);
            if (ans.length === k) return ans;
        }
    }

    return ans;
};