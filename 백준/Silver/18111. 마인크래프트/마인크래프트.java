// 출처: https://velog.io/@arsshavin/%EB%B0%B1%EC%A4%80-18111-%EB%A7%88%EC%9D%B8%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8-Python

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer((br.readLine()), " ");
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());

        int[][] board = new int[n][m];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < m; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int leastTime = Integer.MAX_VALUE;
        int maxHeight = 0;
        for (int lvl = 0; lvl <= 256; lvl++) {
            int exceed = 0;
            int lack = 0;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    if (board[i][j] > lvl) exceed += board[i][j] - lvl;
                    else lack += lvl - board[i][j];

                }
            }
            if (exceed + b >= lack) {
                if ( (exceed * 2) + lack <= leastTime ) {
                    leastTime = (exceed * 2) + lack;
                    maxHeight = lvl;
                }
            }
        }

        System.out.println(leastTime + " " + maxHeight);
    }
}
