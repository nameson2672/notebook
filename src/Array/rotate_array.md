# Rotated Array

Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.

**Example 1:**

```csharp
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

## Solution 1:

This is the iterative solution using the mod(%) math operator to get the position of the element. In which current index plus shift vale mode give the needed index of the elements and storing them in new array and coping new array elements to given array solve the problem.

The time and space complexity are both O(n) in this case.

```csharp
public class Solution {
    public void Rotate(int[] nums, int k) {
        if (k==0) return;
        if (nums == null || nums.Length == 0) return;
        int [] newArray = new int[nums.Length];

        for(int i =0; i<nums.Length; i++){  
            int newIndex = (i + k) % nums.Length;
            newArray[newIndex] = nums[i];
        }
        for(int l=0; l<nums.Length; l++){
            nums[l]= newArray[l];
        }
    }
}
```

## Solution 2: <mark>Optimal Solution</mark>

This solution is obtained by using simple trick. So we reverse the whole array at the first. And the last k item become the first k item  but in reverse order so we reverse first k item and then remaining item and get the result.

```csharp
public class Solution {
    public void Rotate(int[] nums, int k) {
        if (k==0) return;
        if (nums == null || nums.Length == 0) return;
        // To bound the value of k is its value is larger than the length of th given aarray 
        k = k % nums.Length;
        Reverse(nums,0,nums.Length-1);
        Reverse(nums, 0, k-1);
        Reverse(nums, k, nums.Length-1);

    }
    public void Reverse(int[] array, int start, int end){

        while(start<end){
            int dummy = array[start];
            array[start] = array[end];
            array[end] = dummy;
            start++;
            end--;
        }
    }
}
```

The time complexity of this solution is O(n) where as space complexity is O(1).
