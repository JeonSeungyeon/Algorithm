import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();

        String[] croatia = {"dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="};

        for (String ca : croatia) {
            if (str.contains(ca)) {
            	str = str.replace(ca, "*");
            }
        }

        System.out.println(str.length());
    }
}