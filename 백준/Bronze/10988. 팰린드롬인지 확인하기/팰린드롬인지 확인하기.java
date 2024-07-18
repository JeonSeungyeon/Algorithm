import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
    	int length = str.length();
    	boolean b = true;
        
        for (int i = 0; i < length / 2; i++) {
            if (str.charAt(i) != str.charAt(length - i - 1)) {
            	b = false;
            	break;  
            }
        }
        if(b) {
        	System.out.println(1);
        } else {
        	System.out.println(0);
        }
    }
}