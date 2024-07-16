import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String S = sc.nextLine().trim();

        int[] positions = new int[26];
        for (int i = 0; i < positions.length; i++) {
            positions[i] = -1;
        }

        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            int index = c - 'a';
            if (index >= 0 && index < 26 && positions[index] == -1) {
                positions[index] = i;
            }
        }

        for (int i = 0; i < positions.length; i++) {
            System.out.print(positions[i] + " ");
        }

        sc.close();
    }
}