import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        
        String vowels = "aeiou";
        int count = 0;
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) count++;
        }
        
        System.out.println(count);
    }
}