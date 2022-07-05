# Merge Sorted Array

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be *stored inside the array* `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example 1:**

```csharp
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.

## Solution:

:bulb: The Idea is to loop through the array and add the largest element first to last position of the nums1 array and do same for 2nd largest and so on.

Edge case: we need to add element remaining in the nums2 to nums1 as the loop only work until n and m both are grater than 0. And if m is garter than n. The m remining  elements are already in nums2.

```csharp
public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int lastIndex = m + n - 1;
        while(n > 0 && m > 0){
            if(nums1[m-1]>nums2[n-1]){
                nums1[lastIndex] = nums1[m-1];
                m--;
            } else{
                nums1[lastIndex] = nums2[n-1];
                n--;
            }
            lastIndex--;
        }

        while(n>0){
            nums1[lastIndex] = nums2[n-1];
            lastIndex--;
            n--;
        }

    }
}
```
