import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int T = scanner.nextInt();

        for (int i = 0; i < T; i++) {
            int C = scanner.nextInt();

            int quarters = C / 25;
            C %= 25;

            int dimes = C / 10;
            C %= 10;

            int nickels = C / 5;
            C %= 5;

            int pennies = C;

            System.out.println(quarters + " " + dimes + " " + nickels + " " + pennies);
        }

        scanner.close();
    }
}
