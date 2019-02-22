/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    46. Permutations

    Given a collection of distinct integers, return all possible permutations.

    Example:

    Input: [1,2,3]
    Output:
    [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]
        
    Solution Big-O: https://en.wikipedia.org/wiki/Heap%27s_algorithm

*/

let input = [1,2,3];

const solution = (input) => {
    
    let ans = [];
    
    permute(input, input.length);

    function permute(arr, size){
        if (size ==1){
            ans.push(arr);
            console.log(arr);
        }

        for (let i = 0; i < size ; i++){

            permute(arr, size -1);

            if (size % 2 == 1){
                let temp = arr[0];
                arr[0] = arr[size -1];
                arr[size-1] = temp;
            }else{
                let temp = arr[i];
                arr[i] = arr[size-1];
                arr[size-1] = temp;
            }

        }
    }
}

solution(input);
