import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);

    	int N = sc.nextInt();
    	sc.nextLine();
    	String str = sc.nextLine();
    	char[] arr = str.toCharArray();
    	int num = 0;
    	for(char c : arr) {
    		num += c - '0';
    	}
    	System.out.println(num);
    }
}