import java.io.IOException;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;


public class Main {
 
    public static void main(String[] args) throws IOException {
 
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       String num = br.readLine().toString();
       
        String invertido = "";
        for(int i = num.length()-1; i>=0; i--)
        {
            invertido += num.charAt(i);
        }
    
        System.out.println(invertido);
    }
 
}