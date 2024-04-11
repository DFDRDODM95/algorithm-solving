import java.util.*;

class Solution {
    boolean solution(String s) {
        Stack<Character> stk = new Stack<>();
        for (char letter : s.toCharArray()) {
            if (stk.size() == 0) stk.push(letter);
            else if (stk.peek() == '(' && letter == ')') {
                stk.pop();
            }
            else stk.push(letter);
        }
        return stk.size() == 0 ? true : false;
    }
}