import java.util.Arrays;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);
    	
    	int N = sc.nextInt();
    	sc.nextLine();
    	
    	String str = sc.nextLine();
    	StringTokenizer st = new StringTokenizer(str, " ");
    	
        int [] arr = new int[N];
        int index = 0;
        while (st.hasMoreTokens()) {
            arr[index++] = Integer.parseInt(st.nextToken());
        }
        
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        
        System.out.println(min + " " + max);
    }
}