import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] target = new int[n];
        for (int i = 0; i < n; i++) {
            target[i] = Integer.parseInt(br.readLine());
        }

        Stack<Integer> stk = new Stack<>();
        StringBuilder builder = new StringBuilder();
        int num = 1;
        int idx = 0;
        stk.push(num++);
        builder.append("+").append("\n");
        while(!stk.isEmpty() || idx < target.length) {
            if (stk.isEmpty()) {
                stk.push(num++);
                builder.append("+").append("\n");
                continue;
            }
            if (stk.peek() == target[idx]) {
                stk.pop();
                builder.append("-").append("\n");
                idx++;
            }
            else if (stk.peek() < target[idx]) {
                stk.push(num++);
                builder.append("+").append("\n");
            }
            else if (stk.peek() > target[idx]){
                builder.setLength(0);
                builder.append("NO");
                break;
            }
        }
        System.out.println(builder.toString());
    }
}
