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
            String[] anos = linha.split(" ");
            int a = Integer.parseInt(anos[0]);
            int b = Integer.parseInt(anos[1]);
            int c = Integer.parseInt(anos[2]);

            char r = 'N';
        
            if(a + b + c == 0)
                r = 'S';
        
            // soma dois sub 1
            if(a + b - c == 0)
                r = 'S';
        
            if((b + c - a) == 0)
                r = 'S';        
        
            if(a + c - b == 0)
                r = 'S';        
        
            // só 2 viagens
            if((a - b == 0) || (b - a == 0))
                r = 'S';
                    
            if((b - c == 0) || (c - b == 0))
                r = 'S';
        
            if((a - c == 0) || (c - a == 0))
                r = 'S';

            System.out.println(r);
            
        }
      
    }
}