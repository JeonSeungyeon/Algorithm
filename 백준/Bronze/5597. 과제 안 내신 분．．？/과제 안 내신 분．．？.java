import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
    	// 스캐너
    	Scanner sc = new Scanner(System.in);
    	
    	int[] inputArr = new int[28];
    	for(int i = 0; i < 28; i++) {
    		int n = sc.nextInt();
    		inputArr[i] = n;
    	}
    	
    	boolean[] numberArr = new boolean[31];
    	for (int i = 0; i < inputArr.length; i++) {
    		numberArr[inputArr[i]] = true;
        }

    	for (int i = 1; i <= 30; i++) {
            if (!numberArr[i]) {
                System.out.println(i);
            }
        }    	
    	
    }
}