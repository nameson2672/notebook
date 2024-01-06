# Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.

**Example 1:**

```csharp
Input: root = [3,9,20,null,null,15,7]
Output: true
```
**Example 2:**

```csharp
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false```
**Example 3:**
```csharp
Input: root = []
Output: true
 ```

**Constraints:**

- The number of nodes in the tree is in the range [0, 5000].
- -104 <= Node.val <= 104

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
    private bool _result = true;

    public bool IsBalanced(TreeNode root) {
        Dfs(root);
        return _result;
    }

    private int Dfs(TreeNode root) {
        if(root == null) {
            return -1;
        }

        var leftDepth = Dfs(root.left);
        var rightDepth = Dfs(root.right);

        _result = _result && (Math.Abs(rightDepth - leftDepth) <= 1);

        return Math.Max(leftDepth, rightDepth) + 1;
    }
}

```