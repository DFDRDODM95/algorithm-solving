import java.util.*;

class Solution {
    public int solution(int[] d, int budget) {
        int sum = Arrays.stream(d).sum();
        Arrays.sort(d);
        int count = 0;
        while (sum > budget) {
            sum -= d[d.length - 1 - count++];
        }
        
        return d.length - count;
    }
}