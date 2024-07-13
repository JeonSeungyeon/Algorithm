import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);
    	
    	int N = 9;
    	int max = 0;
    	int index = 0;
        int [] arr = new int[N];
        for(int i = 0; i < N ; i++) {
        	int num = sc.nextInt();
        	arr[i] = num;
        	if(i == 0) {
        		max = num;
        		index = i;
        	} else if (max < num) {
        		max = num;
        		index = i;
        	}
        }
        System.out.println(max);
        System.out.println(index + 1);
    }
}