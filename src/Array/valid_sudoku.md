# Valid Sudoku

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

## Solution:

The valid solution for a sudoku bord is found by the brute force method.

We create a memory space to track the each row, column, and sub-box grid in a hash table and hash table is placed inside dictionary arranged by row, column and sub-box grid in respective dictionary. And we check whether the current row, column, box has a current element previously occurred if so we return false and at the end we return true as we checked all the box in sudoku. 

The box grid dictionary key has (int, int) data type as to track 9 and we use r/3 and c/3 to get current box and this division are floor division so it is either 0,1,2 as we have only 9 rows and 8 columns which start with 0. In this way we track nine box and element inside them.

```csharp
public class Solution {
    public bool IsValidSudoku(char[][] board) {
        var rows = new Dictionary<int, HashSet<char>>();        
        var cols = new Dictionary<int, HashSet<char>>();
        var squares = new Dictionary<(int, int), HashSet<char>>();

        for(var r = 0; r < 9; r++) {
            rows[r] = new HashSet<char>();
            for(var c = 0; c < 9; c++) {
                if(!cols.ContainsKey(c)) cols[c] = new HashSet<char>();
                if(!squares.ContainsKey((r/3, c/3))) 
                    squares[(r/3, c/3)] = new HashSet<char>();

                if(board[r][c] == '.') continue;


                if(rows[r].Contains(board[r][c]) ||
                  cols[c].Contains(board[r][c]) || 
                  squares[(r / 3, c / 3)].Contains(board[r][c]))
                   return false;

                rows[r].Add(board[r][c]);
                cols[c].Add(board[r][c]);
                squares[(r / 3, c / 3)].Add(board[r][c]);
            }
        }

        return true;
    }
}
```

This solution has both space and time complexity of  O(9^2). 
