/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    443. String Compression

    Given an array of characters, compress it in-place.

    The length after compression must always be smaller than or equal to the original array.

    Every element of the array should be a character (not int) of length 1.

    Example 1:
        Input:
        ["a","a","b","b","c","c","c"]

        Output:
        Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
        
    Solution Big-O: 
        Time Complexity: O(n)
        Space Complexity: O(n)

*/

let input = ["a","a","b","b","c","c","c"];

const solution = (input) => {

    let count       = 0;
    let compressed  = [];

    for (let i = 0; i < input.length ; i++){
        count++;
        if (input[i] !== input[i + 1]){
            compressed.push(input[i]);
            compressed.push(count);
            count = 0;
        }
    }

    return compressed.length;
    //return compressed.length > input ? input : compressed;
}

console.log(solution(input));