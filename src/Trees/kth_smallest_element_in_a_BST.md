# Kth Smallest Element in a BST
Given the `root` of a binary search tree, and an integer `k`, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)
```csharp
Input: root = [3,1,4,null,2], k = 1
Output: 1
```
**Example 2:**
![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)
```csharp
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```
 

**Constraints:**
- The number of nodes in the tree is n.
- 1 <= k <= n <= 104
- 0 <= Node.val <= 104

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
    public int KthSmallest(TreeNode root, int k) {
        int kThValue = 0;
        Stack<TreeNode> order = new Stack<TreeNode>();
        var cur = root;
        while(cur != null || order.Count != 0){
            while(cur != null){
                order.Push(cur);
                cur = cur.left;
            }

            cur = order.Pop();

            k--;
            if(k==0){
                kThValue = cur.val;
                break;
            }
            cur = cur.right;
        } 
        return kThValue;
    }
}
```