/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    141. Linked List Cycle

    Given a linked list, determine if it has a cycle in it.

    To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

    Example 1:
        Input: head = [3,2,0,-4], pos = 1
        Output: true
        Explanation: There is a cycle in the linked list, where tail connects to the second node.

    Solution Big-O: 
        Time Complexity: O(n)

*/

function Node(val){
    this.val    = val;
    this.next   = null;
}

let input = new Node(3);
input.next = new Node(2);
input.next.next = new Node(0);
input.next.next.next = new Node(-4);
input.next.next.next.next = input.next.next;

const solution = (head) => {
    if (!head || !head.next) { return false; }
    let visited;
    while (head) {
        if (head[visited]) { return true; }
        head[visited] = true;
        head = head.next;
    }
    return false;
}

console.log(solution(input));