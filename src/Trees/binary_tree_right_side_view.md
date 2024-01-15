# Binary Tree Right Side View
Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

**Example 1:**

```csharp
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```
**Example 2:**
```csharp
Input: root = [1,null,3]
Output: [1,3]
```
**Example 3:**
```csharp
Input: root = []
Output: []
 ```

**Constraints:**

- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

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
    private List<int> _result = new();

    public IList<int> RightSideView(TreeNode root) {
        Dfs(root, 0);
        return _result;
    }

    private void Dfs(TreeNode root, int level) {
        if (root == null) return;
        if (level >= _result.Count) _result.Add(root.val);

        // At first visit right node
        Dfs(root.right, level + 1);
        Dfs(root.left, level + 1);
    }
}

```