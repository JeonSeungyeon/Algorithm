import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);
    	String str = sc.nextLine();
    	StringTokenizer st = new StringTokenizer(str, " ");

    	int N = Integer.parseInt(st.nextToken());
    	int X = Integer.parseInt(st.nextToken());
    	int[] A = new int[N];

    	for(int i = 0; i < N; i++) {
    		int num = sc.nextInt();
    		A[i] = num;
    	}
    	
    	String result = "";
    	for(int i = 0; i < A.length; i++) {
            if(A[i] < X){
                result += (A[i] + " ");
            }
        }
    	System.out.println(result);

    }
}