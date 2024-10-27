import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;


public class MyClass {
    public static void main(String args[])  throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       String linha;

        while ((linha = br.readLine()) != null)
        {
            System.out.println(Integer.parseInt(linha)-1);
            
        }
    }
}