# Container With Most Water

You are given an integer array height of length `n.` There are n vertical lines drawn such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i]).`

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the ``maximum amount of water`` a container can store.

Notice that you may not slant the container.

 
**Example 1:**
<img src="https://raw.githubusercontent.com/nameson2672/notebook/master/image/most-water-container.jpg" title="" alt="as" width="749">
```csharp
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```
**Example 2:**
```csharp
Input: height = [1,1]
Output: 1
```

## Solution
This problem can be solved by using two pointer and code is as flow
```csharp
public class Solution {
    public int MaxArea(int[] height) {
        int l = 0;
        int r = height.Length-1;
        int largestPossible = 0;
        int curr= 0;
        while(l<r)
        {
            curr = Math.Min(height[l], height[r]) * (r-l);
            largestPossible = Math.Max(largestPossible, curr);
            if(height[l] < height[r])
                l++;
            else 
                r--;
        }
        return largestPossible;
    }
}
```

The time complexity of the above code is `O(n).` And `O(1)` space complexity.