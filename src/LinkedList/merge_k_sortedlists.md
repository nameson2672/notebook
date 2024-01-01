# Merge k Sorted Lists
You are given an array of `k` linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

**Example 1:**
```csharp
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```
**Example 2:**
```csharp
Input: lists = []
Output: []
```
**Example 3:**
```csharp
Input: lists = [[]]
Output: []
```
## Solution 

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        if (lists.Length == 0)
        {
            return null;
        }
        
        while (lists.Length > 1)
        {
            var mergedLists = new ListNode[(lists.Length + 1) / 2];
            for (int i = 0; i < lists.Length; i += 2)
            {
                var l1 = lists[i];
                var l2 = (i + 1 < lists.Length) ? lists[i + 1] : null;
                mergedLists[i/2] = (MergeLists(l1, l2));
            }
            lists = mergedLists;
        }
        
        return lists[0];
    }
    
    public ListNode MergeLists(ListNode l1, ListNode l2)
    {
        var sorted = new ListNode();
        var current = sorted;
        
        while (l1 != null && l2 != null)
        {
            if (l1.val <= l2.val)
            {
                current.next = l1;
                l1 = l1.next;
            }
            else
            {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        if (l1 != null)
        {
            current.next = l1;
        } else 
        {
            current.next = l2;
        }
        
        return sorted.next;
    }
}

```