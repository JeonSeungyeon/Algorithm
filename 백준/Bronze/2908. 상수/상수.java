import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String str = sc.nextLine();
        StringTokenizer st = new StringTokenizer(str, " ");
        String A = st.nextToken();
        String B = st.nextToken();
        
        StringBuilder sbA = new StringBuilder(A);
        StringBuilder sbB = new StringBuilder(B);
        
        String reversedA = sbA.reverse().toString();
        String reversedB = sbB.reverse().toString();
    
        int intA = Integer.parseInt(reversedA);
        int intB = Integer.parseInt(reversedB);
        
        if (intA > intB) {
            System.out.println(intA);
        } else {
            System.out.println(intB);
        }
    
    }
    
}