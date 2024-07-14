import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        double[] scores = new double[N];

        for (int i = 0; i < N; i++) {
            scores[i] = sc.nextDouble();
        }

        double max = scores[0];
        for (int i = 1; i < N; i++) {
            if (scores[i] > max) {
                max = scores[i];
            }
        }

        double sum = 0;
        for (int i = 0; i < N; i++) {
            scores[i] = scores[i] / max * 100;
            sum += scores[i];
        }
        double average = sum / N;

        System.out.printf("%.2f\n", average);
    }
}