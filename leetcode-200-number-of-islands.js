/*
    # Federico Carrizo
    # carrizofg@gmail.com
    # https://github.com/justfede

    200. Number of Islands

    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
    
    You may assume all four edges of the grid are all surrounded by water.

    Example 1:

    Input:
        11110
        11010
        11000
        00000
    Output: 1

    Solution Big-O: 
        Time Complexity: O(Rows x Columns)
*/  

let input = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];

const solution = (grid) => {
    let count   = 0;
    
    for (let column = 0; column < grid.length ; column++){
        for (let row = 0; row < grid[column].length - 1; row++){
            if (grid[row][column] === '0') continue;
            count++;
            dfs(grid, row, column);
        }
    }

    return count;
}

const dfs = (grid, row, column) => {
    if (row < 0 || column < 0 || row >= grid.length || column >= grid[row].length || grid[row][column] == '0'){
        return 0;
    }

    grid[row][column] = '0';
    dfs(grid, row, column - 1);
    dfs(grid, row, column + 1);
    dfs(grid, row - 1, column);
    dfs(grid, row + 1, column);
}

console.log(solution(input));