# Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

**Example 1:**
![](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)
```csharp
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
```
**Example 2:**
```csharp
Input: root = []
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range [0, 104].
- -1000 <= Node.val <= 1000

## Solution: 

```csharp 
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Codec {
    private List<string> encodedList { get; set; }
  
    // Encodes a tree to a single string.
    public string serialize(TreeNode root) {
        encodedList = new List<string>();
        void dfs(TreeNode root)
        {
            if (root == null)
            {
                encodedList.Add("N");
                return;
            }

            encodedList.Add(root.val + "");
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return string.Join(",", encodedList);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data) {
        var nodesArray = data.Split(",");
        var index = 0;

        TreeNode dfs()
        {
            if (nodesArray[index] == "N")
            {
                index++;
                return null;
            }

            var newNode = new TreeNode(int.Parse(nodesArray[index]));
            index++;
            newNode.left = dfs();
            newNode.right = dfs();
            return newNode;
        }

        return dfs();
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));
```