/*
   # Federico Carrizo
   # carrizofg@gmail.com
   # https://github.com/justfede

   1. Two Sum

   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.

   Example:
       [2, 7, 11, 15] , target = 9
       Return: [2, 9];


   Solution Big-O:
       Time Complexity: O(n)
*/

package main

import "fmt"

func solve(input []int, target int) []int {
	m := make(map[int]bool)

	for i := 0; i < len(input); i++ {
		wanted := target - input[i]
		_, seen := m[wanted]
		if seen {
			return []int{wanted, input[i]}
		}

		m[input[i]] = true
	}

	return []int{0, 0}
}

func main() {
	var input = []int{2, 7, 11, 15}
	var target = 9
	fmt.Println(solve(input, target))
}
