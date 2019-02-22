/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    94. Binary Tree Inorder Traversal

    Given a binary tree, return the inorder traversal of its nodes' values.

        Example:

        Input: [1,null,2,3]
           1
            \
            2
            /
           3

        Output: [1,3,2]

    Solution Big-O: 
        Time Complexity: O(n)
        Space Complexity: O(n)

*/

function Node(val){
    this.val  = val;
    this.left = this.right = null;
}

let input = new Node(1);
input.right = new Node(2);
input.right.left = new Node(3);

const solution = (input) => {

    let ans = [];
    if (!input) return ans;

    return dfs(input, ans);

    function dfs(root, ans){
        if (!root) return;
        
        dfs(root.left, ans);
        ans.push(root.val);
        dfs(root.right, ans);

        return ans;
    }
}

console.log(solution(input));