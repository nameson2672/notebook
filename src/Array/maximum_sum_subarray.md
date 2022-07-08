# Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return *its sum*.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```csharp
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

 **Note:** Use the Kadane's Algorithm to solve  Maximum Sum Subarray Problem.

## Solution 1:

The solution 1 is simple solution using brute force to check all possible sub-array and compute their sum and return the highest sum.

## Solution 2:

2nd solution is the Kadane's Algorithm.

It is the simple and elegant algorithm with O(n) time and O(1) space complexity .

Solved using <mark>Dynamic Programing</mark> 

Idea:

    In this solution two sum value one is current sum and other global max sum created. And we iterate through the array and add the sum up to the current index and if the current sum is grater than the global we set global to current. And for changing current sum we take a max of current element or current element plus  current sum as a current sum. That's it.

```csharp
  public class Solution {
    public int MaxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = 0;
        for(int i =0; i<nums.Length; i++)
        {
            currentSum = Math.Max( nums[i], currentSum + nums[i]);
            maxSum = Math.Max(maxSum, currentSum);
        }
        return maxSum;
    }
} 
```
