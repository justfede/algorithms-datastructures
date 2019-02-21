/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    2. Add Two Numbers

    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
    
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example:
        Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
        Output: 7 -> 0 -> 8
        Explanation: 342 + 465 = 807.

    Solution Big-O: 
        Time Complexity: O(n)

*/

function Node(val){
    this.val    = val;
    this.next   = null;
}

const solution = (l1,l2) => {
    let sum = 0;
    let current = new Node(0);
    let result = current;
    
    while(l1 || l2) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new Node(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) current.next = new Node(sum);
    return result.next;
}

let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

let l2 = new Node(5);
l2.next = new Node(6);
l2.next.next =  new Node(4);

console.log(solution(l1,l2));