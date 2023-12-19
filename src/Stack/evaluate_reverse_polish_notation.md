# Evaluate Reverse Polish Notation
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

**Example 1:**
```csharp
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```
**Example 2:**
```csharp
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

## Solution
We utilize a stack to address this issue by adding numbers to the stack until a valid operator is encountered. When an operator is encountered, we perform the operation on the top two numbers in the stack, replacing them with the result. This process continues until only one element remains in the stack, which represents the final result.
```csharp
public class Solution {
    private static int evaluate(int b, int a, string op) => op switch{
        "+" => a + b,
        "-" => a - b,
        "*" => a * b,
        "/" => a / b,
        _   => throw new Exception()
    };
    public int EvalRPN(string[] tokens) {
        var stack = new Stack<int>();
        var result = 0;
        
        foreach(var token in tokens) {
            int number = 0;
            var isNumber = int.TryParse(token, out number);
            if(isNumber) 
                stack.Push(number);
            else {
                result = evaluate(stack.Pop(), stack.Pop(), token); 
                stack.Push(result);
            }
            
        }
        
        return stack.Pop();
    }
}
```
The time complexity of this problem is O(n)

