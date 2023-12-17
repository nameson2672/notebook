# Valid Parentheses

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

    1.Open brackets must be closed by the same type of brackets.
    2.Open brackets must be closed in the correct order.
    3.Every close bracket has a corresponding open bracket of the same type.
 

**Example 1:**

```csharp
Input: s = "()"
Output: true
```
**Example 2:**
```csharp
Input: s = "()[]{}"
Output: true
```
**Example 3:**
```csharp
Input: s = "(]"
Output: false
```
## Solution
We use stack for this problem. Loop through string and if it is opening add to stack and if it is closing and match with current head of stack remove opening from stack if not return `false` and if stack is empty at the end return `true`. 
```csharp
public class Solution {
    public bool IsValid(string s) {
         var stack = new Stack<char>();
        var pairs = new Dictionary<char, char>() {
            [')'] = '(',
            [']'] = '[',
            ['}'] = '{'
        };

        foreach (char c in s) {
            if (!pairs.ContainsKey(c)) {
                stack.Push(c);
            } else if (stack.Count == 0 || stack.Pop() != pairs[c]) {
                return false;
            }
        }

        return stack.Count == 0;
    }
}
```