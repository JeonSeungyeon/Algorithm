import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) {
    	// 스캐너
    	Scanner sc = new Scanner(System.in);
    	
    	// N, M 한줄로 입력
    	String NM = sc.nextLine();
    	// N, M 분리를 위한 문장
    	StringTokenizer token1 = new StringTokenizer(NM, " ");
    	
    	// N, M 분리
    	int N = Integer.parseInt(token1.nextToken());
    	int M = Integer.parseInt(token1.nextToken());
    	
    	// 바구니 설정
    	int[] arr = new int[N];
    	for (int i = 0; i < N; i++) {
            arr[i] = i + 1;
        }
    	
    	for(int num = 0 ; num < M ; num++) {
    		// i, j 한줄로 입력
    		String ij = sc.nextLine();
    		
    		// i, j 분리를 위한 문장
    		StringTokenizer token2 = new StringTokenizer(ij, " ");
    		
    		// i, j 분리
    		int i = Integer.parseInt(token2.nextToken()) - 1;
        	int j = Integer.parseInt(token2.nextToken()) - 1;
        	
        	// 공 바꾸기
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

    	}	
    	// 출력
    	for (int num3 = 0; num3 < N; num3++) {
            System.out.print(arr[num3] + " ");
        }
    }
}