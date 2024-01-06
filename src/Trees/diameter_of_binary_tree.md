# Diameter of Binary Tree

Given the `root` of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The length of a path between two nodes is represented by the number of edges between them.

**Example 1:**

```csharp
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].```

**Example 2:**

```csharp
Input: root = [1,2]
Output: 1
 ```

**Constraints:**

- The number of nodes in the tree is in the range [1, 104].
- -100 <= Node.val <= 100

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
   int result = -1;
    
    public int DiameterOfBinaryTree(TreeNode root) {
        dfs(root);
        return result;
    }
    
    private int dfs(TreeNode current) {
        if (current == null) {
            return -1;
        }
        int left = 1 + dfs(current.left);
        int right = 1 + dfs(current.right);
        result = Math.Max(result, (left + right));
        return Math.Max(left, right);
    }
}
```