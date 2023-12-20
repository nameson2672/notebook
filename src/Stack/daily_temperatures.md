# Daily Temperatures
Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

 

**Example 1:**
```csharp
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

**Example 2:**
```csharp
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```
**Example 3:**
```csharp
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

## Solution

```csharp
public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        var result = new int[temperatures.Length];
        Array.Fill(result, 0);
        var stack = new Stack<int>();

        for( var i = 0; i< temperatures.Length; i++){
            var t = temperatures[i];
            while(stack.Any() && temperatures[stack.Peek()] < t ){
                var prev = stack.Pop();
                result[prev] = i - prev;
            }
            stack.Push(i);
        }

        return result;
    }
}
```