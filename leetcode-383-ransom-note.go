/*
   # Federico Carrizo
   # carrizofg@gmail.com
   # https://github.com/justfede

   	383. Ramson Note

	Given an arbitrary ransom note string and another string containing letters from all the magazines,
	write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

	Each letter in the magazine string can only be used once in your ransom note.

	Note:
		You may assume that both strings contain only lowercase letters.

	canConstruct("a", "b") -> false
	canConstruct("aa", "ab") -> false
	canConstruct("aa", "aab") -> true

   Solution Big-O:
       Time Complexity: O(n)
*/

package main

import "fmt"

func canConstruct(ransomNote string, magazine string) bool {
	m := make(map[byte]int)

	for i := 0; i < len(magazine); i++ {
		m[magazine[i]] = m[magazine[i]] + 1
	}

	for j := 0; j < len(ransomNote); j++ {
		count, exist := m[ransomNote[j]]
		if !exist || count <= 0 {
			return false
		}
		m[ransomNote[j]] = m[ransomNote[j]] - 1
	}

	return true
}

func main() {
	note := "aa"
	magazine := "ab"
	fmt.Println(canConstruct(note, magazine))
}
