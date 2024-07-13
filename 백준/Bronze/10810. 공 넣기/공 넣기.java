import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) {
    	// 스캐너
    	Scanner sc = new Scanner(System.in);
    	
    	// N, M 한줄로 입
    	String NM = sc.nextLine();
    	// N, M 분리를 위한 문
    	StringTokenizer token1 = new StringTokenizer(NM, " ");
    	
    	// N, M 분
    	int N = Integer.parseInt(token1.nextToken());
    	int M = Integer.parseInt(token1.nextToken());
    	
    	// 바구니 설정
    	int[] arr = new int[N];
    	
    	for(int num = 0 ; num < M ; num++) {
    		String ijk = sc.nextLine();
    		StringTokenizer token2 = new StringTokenizer(ijk, " ");
    	
    		int i = Integer.parseInt(token2.nextToken()) - 1;
        	int j = Integer.parseInt(token2.nextToken()) - 1;
        	int k = Integer.parseInt(token2.nextToken());
        	
        	for (int num2 = i; num2 < j + 1; num2++) {
        		arr[num2] = k;
        	}
    	}
    	
    	for (int num3 = 0; num3 < N; num3++) {
            System.out.print(arr[num3] + " ");
        }
    }
}