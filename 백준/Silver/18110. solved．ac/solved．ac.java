import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        if (n == 0) {
            System.out.println(0);
            return;
        }
        int offset = (int) Math.round((double)n / 10.0 * 1.5);
        int start = offset;
        int end = n - offset;

        double sum = 0;
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(arr);

        for (int i = start; i < end; i++) {
            sum += arr[i];
        }

        int result = (int)Math.round(sum / (n - (offset * 2)) );
        System.out.println(result);
    }
}