// 출처 : https://www.acmicpc.net/board/view/139801 - 일부 수정

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];
        double sum = 0;
        int [] inputRange = new int [8001];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
            sum += arr[i];
            inputRange[arr[i] + 4000]++;
        }

        int avg = (int)Math.round(sum / n);
        Arrays.sort(arr);

        int middle = arr[n / 2];

        int maxQuantity = 0, maxIndex = -1, maxCnt = 1, temp = 0;
        for (int i = 0; i < 8001; i++) {
            if (inputRange[i] > maxQuantity) {
                maxCnt = 1;
                maxIndex = i;
                maxQuantity = inputRange[i];
            }
            else if (inputRange[i] == maxQuantity) {
                maxCnt++;
                if (maxCnt == 2) temp = i - 4000;
            }
        }

        int mf = maxIndex - 4000;
        if (maxCnt >= 2) mf = temp;

        int range = arr[n - 1] - arr[0];

        String result = avg + "\n" +
                middle + "\n" +
                mf + "\n" +
                range;

        System.out.println(result);

    }
}
