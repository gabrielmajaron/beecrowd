import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       String linha;
       while ((linha = br.readLine()) != null)
       {
           double a = Integer.parseInt(linha.split(" ")[0]);
           double b = Integer.parseInt(linha.split(" ")[1]);
            
           System.out.printf("%.2f\n",a/b);
       }
 
    }
 
}