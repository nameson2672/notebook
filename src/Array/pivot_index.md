# Find Pivot Index

Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return the **leftmost pivot index**. If no such index exists, return -1.

**Example 1:**

```csharp
Input: nums = [1,7,3,6,5,6]
Output: 3
```

**Explanation:**
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

## Solution:

We need to use two pointers to solve this problem. We add the whole array and store it in the sum pointer. And we again loop through the array subtracting the sum up to those elements where current index is and check if the prefix sum is equal to the pervious subtracted sum excluding the current index value.

```csharp
public class Solution {
    public int PivotIndex(int[] nums) {
        int Sum = 0;
        var prefix=0;
        for(int i=0; i<nums.Length;i++){
            Sum += nums[i];
        }
        for(int j=0; j<nums.Length; j++){
            if (prefix == Sum - prefix - nums[j]){
				return j;
			}
            prefix += nums[j];
        }
        return -1;
        
    }
}
```

 
