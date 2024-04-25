import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static int n, m;
    static class Cell {
        int r, c, b;
        Cell(int r, int c, int b) {
            this.r = r;
            this.c = c;
            this.b = b;
        }
    }
    static Queue<Cell> queue;
    static int[][] board;
    static int[][][] vis;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        queue = new LinkedList<>();
        board = new int[n][m];
        vis = new int[n][m][2];

        for (int i = 0; i < n; i++) {
            String temp = br.readLine();
            for (int j = 0; j < m; j++) {
                board[i][j] = temp.charAt(j) - '0';
            }
        }

        queue.add(new Cell(0, 0, 0));
        vis[0][0][0] = 1;
        vis[0][0][1] = 1;
        System.out.println(bfs());
    }

    static int bfs() {
        while(!queue.isEmpty()) {
            Cell cur = queue.poll();
            for (int dir = 0; dir < 4; dir++) {
                int nr = cur.r + dy[dir];
                int nc = cur.c + dx[dir];
                if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
                if (board[nr][nc] == 1 && cur.b == 1) continue;
                if (vis[nr][nc][cur.b] > 0) continue;
                if (board[nr][nc] == 1  && cur.b == 0) {
                    vis[nr][nc][1] = vis[cur.r][cur.c][0] + 1;
                    queue.add(new Cell(nr, nc, 1));
                }
                else if (board[nr][nc] == 0){
                    vis[nr][nc][cur.b] = vis[cur.r][cur.c][cur.b] + 1;
                    queue.add(new Cell(nr, nc, cur.b));
                }
            }
        }

        int result1 = vis[n - 1][m - 1][0];
        int result2 = vis[n - 1][m - 1][1];

        if (result1 == 0 && result2 == 0) return -1;
        else if (result1 == 0) return result2;
        else if (result2 == 0) return result1;
        else return Math.min(result1, result2);
    }
}
