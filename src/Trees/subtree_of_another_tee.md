# Subtree of Another Tree

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of root with the same structure and node values of subRoot and `false` otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg)
```csharp
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
```
**Example 2:**
![](https://assets.leetcode.com/uploads/2021/04/28/subtree2-tree.jpg)

```csharp
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```
 

**Constraints:**

- The number of nodes in the root tree is in the range [1, 2000].
- The number of nodes in the subRoot tree is in the range [1, 1000].
- -104 <= root.val <= 104
- -104 <= subRoot.val <= 104

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
    public bool IsSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) return root == subRoot;
        if (root.val == subRoot?.val && IsSameTree(root, subRoot)) return true;

        return IsSubtree(root.left, subRoot) || IsSubtree(root.right, subRoot);
    }
    private bool IsSameTree(TreeNode p, TreeNode q) {
        if(p==null || q == null){
            return p == q;
        }
        return p.val == q.val && 
        IsSameTree(p.left, q.left) && 
        IsSameTree(p.right, q.right);
    }
}
```