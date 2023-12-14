# Minimum Window Substring

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window 
substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


**Example 1:**
```csharp
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```
**Example 2:**

```csharp
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```
**Example 3:**
```csharp
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

## Solution

```csharp
public class Solution {
    public string MinWindow(string s, string t) {
        if(string.IsNullOrEmpty(s)) return string.Empty;

        var countT = new Dictionary<char, int>();
        var window = new Dictionary<char, int>();
        
        foreach(var c in t){
            AddCharToDictionary(c, countT);
        }

        var have = 0;
        var need = countT.Count;
        var left = 0;
        var res = new [] {-1, -1};
        var length = int.MaxValue;

        for( var right =0; right< s.Length; right++){
            var c = s[right];
            AddCharToDictionary(c, window);

            if(countT.ContainsKey(c) && countT[c] == window[c]) have++;

            while( have == need){
                var windowSize = right - left + 1;
                if(windowSize < length){
                    res = new [] { left, right};
                    length = windowSize;
                }

                window[s[left]]--;
                if(countT.ContainsKey(s[left]) && countT[s[left]] > window[s[left]]) have--;

                left++;
            }
        }
        return length == int.MaxValue ? string.Empty: s.Substring(res[0], res[1] - res[0] + 1);

    }
    private void AddCharToDictionary(char c, IDictionary<char, int> dict)
    {
        if (dict.ContainsKey(c)) dict[c]++;
        else dict.Add(c, 1);
    }
}
```
