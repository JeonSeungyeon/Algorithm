import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.IOException;

public class Main {
    public static void main(String args[]) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
             BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out))) {
             
            int T = Integer.parseInt(br.readLine());
            String S;

            for(int i = 1; i <= T; i++) {
                S = br.readLine();
                String[] N = S.split(" ");
                if(N.length  > 1) {
                	int num1 = Integer.parseInt(N[0]);
                    int num2 = Integer.parseInt(N[1]);
                    int sum = num1 + num2;

                    bw.write("Case #" + i + ": " + Integer.toString(sum));
                    bw.newLine();	
                }
     }
            bw.flush();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}