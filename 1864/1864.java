import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
       String frase = "LIFE IS NOT A PROBLEM TO BE SOLVED";
        
        InputStreamReader ir = new InputStreamReader(System.in);
        BufferedReader in = new BufferedReader(ir);
        
        int index = Integer.parseInt(in.readLine());
        if(index>=34)
            System.out.println(frase);
        else
            System.out.println(frase.substring(0, index));
 
    }
 
}