# Binary Tree Maximum Path Sum

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

 
**Example 1:**
![](https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg)
```csharp
Input: root = [1,2,3]
Output: 6
```
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
**Example 2:**
![](https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg)
```csharp
Input: root = [-10,9,20,null,null,15,7]
Output: 42
```
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

**Constraints:**

- The number of nodes in the tree is in the range [1, 3 * 104].
- -1000 <= Node.val <= 1000

## Solution:
```csharp
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    int maxPathSum = Int32.MinValue;

    public int MaxPathSum(TreeNode root) {
        DfsMaxPathSum(root);
        return maxPathSum;
    }

    private int DfsMaxPathSum(TreeNode root){
        if(root == null){
            return 0;
        }

        int leftMax = DfsMaxPathSum(root.left);
        int rightMax = DfsMaxPathSum(root.right);
        int currentMax = 0;

        currentMax = Math.Max(currentMax, Math.Max(leftMax + root.val, rightMax + root.val));
        maxPathSum = Math.Max(maxPathSum, root.val + leftMax + rightMax);

        return currentMax;
    }

}
```