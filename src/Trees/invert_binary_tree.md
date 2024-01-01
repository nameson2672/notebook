# Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
**Example 1:**
![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
```csharp
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```
**Example 2:**
![](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
```csharp
Input: root = [2,1,3]
Output: [2,3,1]
```
**Example 3:**
```csharp
Input: root = []
Output: []
```
**Constraints:**

- `The number of nodes in the tree is in the range [0, 100].`
- `100 <= Node.val <= 100`

## Solution 
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
    public TreeNode InvertTree(TreeNode root) {
        if(root == null) return null;

        var temp = root.right;
        root.right = root.left;
        root.left = temp;

        InvertTree(root.left);
        InvertTree(root.right);

        return root;
    }
}
```
The time complexity of this solution is `O(n)`.