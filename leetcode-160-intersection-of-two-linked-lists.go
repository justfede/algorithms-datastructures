/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

	160. Intersection of Two Linked Lists

    Write a program to find the node at which the intersection of two singly linked lists begins.

	Example:
		Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
		Output: Reference of the node with value = 8
		Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
			From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5].
			There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

	Solution Big-O:


*/

package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {

	visited := make(map[int]*ListNode)

	for headA != nil {
		visited[headA.Val] = headA
		headA = headA.Next
	}

	for headB != nil {
		_, exist := visited[headB.Val]
		if exist {
			return headB
		}

		headB = headB.Next
	}

	return nil
}

func main() {

	var listA ListNode
	listA.Val = 4
	listA.Next = &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 8,
			Next: &ListNode{
				Val: 4,
				Next: &ListNode{
					Val:  5,
					Next: nil,
				},
			},
		},
	}

	var listB ListNode
	listB.Val = 5
	listB.Next = &ListNode{
		Val: 0,
		Next: &ListNode{
			Val: 1,
			Next: &ListNode{
				Val: 8,
				Next: &ListNode{
					Val:  4,
					Next: nil,
				},
			},
		},
	}

	fmt.Println(getIntersectionNode(&listA, &listB))
}
