# Merge Two Sorted Lists

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

- Both `list1` and `list2` are sorted in **non-decreasing** order.

Example:

```csharp
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

Solution:

First create a new node and loop infinitely (as we will brake loop from inside of the loop it became finite)  if current node value of list1 is less than list2 node value add list 1 node to new node and if the opposite is true add list2 current node and change that list to next which value is added to the new node. And at the first step of the loop if list1 equal to null add list2 to the new node and vice-versa.

Code Solution:

1. By using iteration through list
   
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
       public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
           ListNode dummey = new ListNode(0);
           ListNode tail = dummey;
           while(true){
               if(list1 == null){
                   tail.next = list2;
                   break;
               }
               if(list2 == null){
                   tail.next = list1;
                   break;
               }
   
               if(list1.val<list2.val){
                   tail.next = list1;
                   list1 = list1.next;
               }
               else{
                   tail.next = list2;
                   list2 = list2.next;
               }
               tail = tail.next;
           }
   
           return dummey.next;
       }
   }
   ```

2. By using recursion 
   
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
       public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
            if (list1 == null)
               return list2;
           if (list2 == null)
               return list1;
   
           if (list1.val < list2.val) {
               list1.next = MergeTwoLists(list1.next, list2);
               return list1;
           }
           else {
               list2.next = MergeTwoLists(list1, list2.next);
               return list2;
           }
       }
   }
   ```
