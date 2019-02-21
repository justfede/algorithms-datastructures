/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    98. Validate Binary Search Tree

    Given a binary tree, determine if it is a valid binary search tree (BST).

    Assume a BST is defined as follows:

    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.

    Example 1:
    Input:
         2
        / \
       1   3

    Output: true

    Solution Big-O: 
        Time Complexity: O(n)
        Space Complexity: O(1) (what about the recursive stack?)

*/

function Node(val){
    this.val = val;
    this.left = this.right = null;
}

let input = new Node(2);
input.left = new Node(1);
input.right = new Node(3);

const solution = (input) => {
    let root = input;

    function helper(root, min, max){
        if (!root) return true;
        if ( (min !== null && root.val <= min) || (max !== null && root.val >= max)){
            return false;
        }
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    return helper(root, null, null);
}

console.log(solution(input));