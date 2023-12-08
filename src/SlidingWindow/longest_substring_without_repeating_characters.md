# Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest 
substring without repeating characters.

 

**Example 1:**
```csharp
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```csharp
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
**Example 3:**

```csharp
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution 1:
This problem can be solved using varying size sliding window technique. First of all we take left and right pointers and character set and loop through array. And then if current character is in set we shift left pointer and if it in not in array we shift right pointer and for set we remove and add current element to set respectively.
```csharp
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int leftPointer = 0, rightPointer = 0, maxLength = 0;
        HashSet<int> chars = new HashSet<int>();

        while (rightPointer < s.Length) {
            char currChar = s[rightPointer];
            if (chars.Contains(currChar)) { // Move left pointer until all duplicate chars removed
                chars.Remove(s[leftPointer]);
                leftPointer++;
            } else {
                chars.Add(currChar);
                maxLength = Math.Max(maxLength, rightPointer - leftPointer + 1);
                rightPointer++;
            }
        }
        return maxLength;
    }
}
```
This solution is O(n) time complexity.