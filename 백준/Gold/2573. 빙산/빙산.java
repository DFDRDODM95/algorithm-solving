//참고한 출처 : https://yabmoons.tistory.com/69

import java.io.*;
import java.util.*;

public class Main {
    static int n, m;
    static int[][] board;
    static int[][] nextBoard;
    static int[][] vis;

    static class Cell {
        int r, c;

        public Cell(int r, int c) {
            this.r = r;
            this.c = c;
        }
    }

    static Queue<Cell> queue;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    static void input() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        board = new int[n][m];
        nextBoard = new int[n][m];
        vis = new int[n][m];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < m; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }
    }

    static void bfs(int a, int b) {
        queue = new LinkedList<>();
        vis[a][b] = 1;
        queue.add(new Cell(a, b));
        while(!queue.isEmpty()) {
            Cell cur = queue.poll();
            for (int dir = 0; dir < 4; dir++) {
                int nr = cur.r + dy[dir];
                int nc = cur.c + dx[dir];
                if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
                if (vis[nr][nc] != 0 || board[nr][nc] == 0) continue;
                vis[nr][nc] = 1;
                queue.add(new Cell(nr, nc));
            }
        }
    }

    static int melt(int r, int c) {
        int cnt = 0;
        for (int dir = 0; dir < 4; dir++) {
            int nr = r + dy[dir];
            int nc = c + dx[dir];

            if (board[nr][nc] == 0) cnt++;
        }
        return cnt;
    }

    static void solution() {
        int year = 0;
        int land;
        while (true) {
            land = 0;
            clear_vis();
            clear_nextBoard();

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    if (board[i][j] != 0 && vis[i][j] == 0) {
                        land++;
                        bfs(i, j);
                    }
                }
            }

            if (land >= 2) {
                System.out.println(year);
                break;
            }
            if (land == 0) {
                System.out.println(0);
                break;
            }

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    if (board[i][j] != 0) {
                        nextBoard[i][j] = board[i][j] - melt(i, j);
                        if (nextBoard[i][j] < 0) nextBoard[i][j] = 0;
                    }
                }
            }

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    board[i][j] = nextBoard[i][j];
                }
            }
            year++;
        }
    }

    static void clear_vis() {
        for (int[] row : vis) {
            Arrays.fill(row, 0);
        }
    }
    static void clear_nextBoard() {
        for (int[] row : nextBoard) {
            Arrays.fill(row, 0);
        }
    }

    static void solve() throws IOException {
        input();
        solution();
    }

    public static void main(String[] args) throws IOException {
        solve();
    }
}
