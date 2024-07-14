import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        // N, M 한줄로 입력
    	String NM = sc.nextLine();
    	// N, M 분리를 위한 문장
    	StringTokenizer token1 = new StringTokenizer(NM, " ");
    	
    	// N, M 분리
    	int N = Integer.parseInt(token1.nextToken());
    	int M = Integer.parseInt(token1.nextToken());
       
    	int[] arr = new int[N];
    	for(int i = 0 ; i < N ; i++) {
    		arr[i] = i + 1;
    	}
    	
    	for(int k = 0 ; k < M ; k++) {
    		String ij = sc.nextLine();
        	StringTokenizer token2 = new StringTokenizer(ij, " ");
        	
        	int i = Integer.parseInt(token2.nextToken()) - 1;
        	int j = Integer.parseInt(token2.nextToken()) - 1;
        	
        	while (i < j) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
    	}
    	
    	for(int i = 0; i < arr.length ; i++) {
    		System.out.print(arr[i] + " ");
    	}
    	
    }
}