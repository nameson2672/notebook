# Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list `k` at a time, and return the modified list.
`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

**Example 1:**
```csharp
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```
**Example 2:**
```csharp
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 ```

**Constraints:**

`The number of nodes in the list is n.`
`1 <= k <= n <= 5000`
`0 <= Node.val <= 1000`
 
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
public class Solution
{
    public ListNode ReverseKGroup(ListNode head, int k)
    {
        var dummy = new ListNode(0, head);
        var groupPrev = dummy;
        var groupNext = dummy;

        while (true)
        {
            var kth = getKth(groupPrev, k);
            if (kth == null)
                break;

            groupNext = kth.next;

            // reverse group
            var prev = kth.next;
            var curr = groupPrev.next;

            while (curr != groupNext)
            {
                var temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            var tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }

    private ListNode getKth(ListNode curr, int k)
    {
        while (curr != null && k > 0)
        {
            curr = curr.next;
            k -= 1;
        }

        return curr;
    }
}
 ```

Follow-up: Can you solve the problem in O(1) extra memory space?