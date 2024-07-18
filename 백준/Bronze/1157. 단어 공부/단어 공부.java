import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine().toLowerCase();
        
        Map<Character, Integer> count = new HashMap<>();
        
        for (char s : str.toCharArray()) {
            if (Character.isAlphabetic(s)) {
            	count.put(s, count.getOrDefault(s, 0) + 1);
            }
        }
        
        int max = 0;
        for (int freq : count.values()) {
            if (freq > max) {
            	max = freq;
            }
        }
        
        StringBuilder most = new StringBuilder();
        for (Map.Entry<Character, Integer> entry : count.entrySet()) {
            if (entry.getValue() == max) {
            	most.append(entry.getKey());
            }
        }
        
        if (most.length() > 1) {
            System.out.println("?");
        } else {
            System.out.println(most.toString().toUpperCase().charAt(0));
        }
    }
}