/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    206. Reverse Linked List

    Reverse a singly linked list.

    Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
        
    Solution Big-O:
        Linear Time O(n)
*/

function Node(val){
    this.val = val;
    this.next = null;
}

let input = new Node(1);
input.next = new Node(2);
input.next.next = new Node(3);
input.next.next.next = new Node(4);
input.next.next.next.next = new Node(5);

const solution = (input) => {

    let current = input;
    let prev    = null;

    while (current){
        let nextTemp    = current.next;    
        current.next    = prev;
        prev            = current;
        current         = nextTemp;
    }

    return prev;       
};

console.log(solution(input));