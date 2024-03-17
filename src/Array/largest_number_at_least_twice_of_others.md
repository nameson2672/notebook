# Largest Number At Least Twice of Others

You are given an integer array `nums` where the largest integer is unique.
Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return `-1` otherwise.

 

**Example 1:**

```csharp
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
```
**Example 2:**
```csharp
Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
```


**Constraints:**

- 2 <= nums.length <= 50
- 0 <= nums[i] <= 100
- The largest element in nums is unique.

## Solution 

```csharp
public class Solution {
    public int DominantIndex(int[] nums) {
        var max1 = int.MinValue;
        var max1Index = 0;
        var max2 = int.MinValue;
        var max2Index = 0;
        var isDouble = false;
        
        for(int i=0; i < nums.Length; i++){
            if(nums[i]> max1){
                max2= max1;
                max2Index = max1Index; 

                max1= nums[i];
                max1Index = i;
            } else if(nums[i]> max2){
                max2 = nums[i];
                max2Index = i;
            }
        }

        return max1>= max2*2?max1Index:-1;
    }
}
```