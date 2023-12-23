# Search a 2D Matrix
You are given an `m x n` integer matrix `matrix` with the following two properties:
- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

`You must write a solution in O(log(m * n)) time complexity.`

**Example 1:**
```csharp
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```
**Example 2:**
```csharp
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 ```

 ## Solution:
To solve this problem first we find in which row does the target lies and we make a binary search in that rwo to find a target number.
 ```csharp
 public class Solution {
    public bool SearchMatrix(int[][] matrix, int target) {
        int rows = matrix.Length;
        int columns = matrix[0].Length;

        int top = 0, bot = rows -1;
        int row =0;
        
        while(top<= bot){
            row = (top + bot) / 2;

            if(target > matrix[row][columns-1]) top = row + 1;
            else if (target < matrix[row][0]) bot = row -1;
            else break; 
        }

        int l = 0, r = matrix[0].Length-1;

        while(l<=r){
            int mid = (l+r)/2;
            if(target > matrix[row][mid]) l = mid + 1;
            else if(target < matrix[row][mid]) r = mid -1;
            else return true;
        }
        return false;
    }
}
 ```
 The time complexity of this solution is `O(log(m*n))`