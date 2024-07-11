import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int a = N/4;
        String str = "";
        
        for(int i = 0 ; i < a ; i++) {
        	str += "long ";
        }
        System.out.println(str + "int");
        
    }
}