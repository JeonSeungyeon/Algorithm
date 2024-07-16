import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int T = sc.nextInt();
        
        sc.nextLine();
        for(int k = 0; k < T; k++) {
            String str = sc.nextLine();
            StringTokenizer st = new StringTokenizer(str, " ");

        	int R = Integer.parseInt(st.nextToken());
        	String S = st.nextToken();
        	char[] arr = S.toCharArray();
        	String result = "";
        	
        	for(int i = 0 ; i < arr.length ; i++) {
        		for(int j = 0; j < R; j++) {
        			result += arr[i];
        		}
        	}
        	
        	System.out.println(result);
     	
        }
    }
}