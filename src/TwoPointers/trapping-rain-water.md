# Trapping Rain Water

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Example 1:**
<img src="https://raw.githubusercontent.com/nameson2672/notebook/master/image/rainwatertrap.png" title="" alt="as" width="749">

```csharp
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```
**Example 2:**
```csharp
Input: height = [4,2,0,3,2,5]
Output: 9
```

## Solution

[Explanation](https://www.youtube.com/watch?v=ZI2z5pq0TqA&ab_channel=NeetCode)

```csharp
public class Solution
{

    public int Trap(int[] height)
    {

        if (height is null || height.Length == 0) return 0;

        int left = 0, right = height.Length - 1;
        int leftMax = height[left], rightMax = height[right];
        var result = 0;

        while (left < right)
        {
            if (leftMax < rightMax)
            {
                left++;
                leftMax = Math.Max(leftMax, height[left]);
                result += leftMax - height[left];
            }
            else
            {
                right--;
                rightMax = Math.Max(rightMax, height[right]);
                result += rightMax - height[right];
            }
        }

        return result;
    }
}
```