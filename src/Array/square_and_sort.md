# Squares of a Sorted Array

Given an integer array `nums` sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

```csharp
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

## Solution 1:

First solution of the problem can be obtained by using brute force approach where at the first we square all element and place them in  their previous position and then sort them and return the array.

This approach is time complexity is O(nlogn) as we are using sort(Quick Sort).

## Solution 2:

This solution is optimized and use <mark>two pointers</mark> In this approach we first define left and right pointer and compare absolute value of last and first index and add the bigger index square to the last position of new array. And then the respective pointer value is change to point to new element.

```csharp
public class Solution {
    public int[] SortedSquares(int[] nums) {
        int left = 0;
        int right = nums.Length-1;
        int [] newNums =  new int[nums.Length];
        int newArrayIndex = nums.Length-1;   

        while(left<=right){

            if(Math.Abs(nums[left])<Math.Abs(nums[right])){
                newNums[newArrayIndex] = nums[right] * nums[right];
                right--;
            } else{
                newNums[newArrayIndex] = nums[left]* nums[left];
                left++;
            }

            newArrayIndex--;
        }
        return newNums;
    }
}
```

 This approach has a time complexity of O(n). 
