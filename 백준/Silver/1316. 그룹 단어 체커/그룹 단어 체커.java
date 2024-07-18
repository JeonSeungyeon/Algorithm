import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int N = scanner.nextInt();
        scanner.nextLine();
        
        int groupWordCount = 0;

        for (int i = 0; i < N; i++) {
            String word = scanner.nextLine();
            if (isGroupWord(word)) {
                groupWordCount++;
            }
        }

        System.out.println(groupWordCount);
    }

    public static boolean isGroupWord(String word) {
        boolean[] seen = new boolean[26];
        char prevChar = ' ';

        for (int i = 0; i < word.length(); i++) {
            char currentChar = word.charAt(i);
            
            if (currentChar != prevChar) {
                if (seen[currentChar - 'a']) {
                    return false;
                }
                seen[currentChar - 'a'] = true;
                prevChar = currentChar;
            }
        }
        return true;
    }
}