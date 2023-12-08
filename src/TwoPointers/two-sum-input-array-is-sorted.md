# Two Sum II - Input Array Is Sorted

Given a **1-indexed** array of integers `numbers` that is already ***sorted in non-decreasing order***, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 < numbers.length`.

Return *the indices of the two numbers,* `index1` *and* `index2`*, **added by one** as an integer array* `[index1, index2]` *of length 2.*

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

```csharp
Example 1:

Input: numbers = [2,7, 11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

```csharp
Example 2:

Input: numbers = [2, 3, 4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

## Solution:

we can solve this problem by using two-pointers approach. We assign left and right pointer and we add value at two pointer and if sum is less than target we increase left pointer by 1 and for grater than target we decrease right pointer by 1. And we loop the process until right pointer is less than left pointer.

```csharp
public class Solution
{
    public int[] TwoSum(int[] numbers, int target)
    {
        var l = 0;
        var r = numbers.Length - 1;
        while (r > l)
        {
            if (numbers[l] + numbers[r] == target)
            {
                break;
            }
            if (numbers[l] + numbers[r] < target)
            {
                l++;
            }
            else
            {
                r--;
            }

        }
        return new int[] { l + 1, r + 1 };
    }
}
```