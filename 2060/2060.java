import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;


public class MyClass {
    public static void main(String args[]) throws IOException{
      
        int m2 = 0, m3 = 0, m4 = 0, m5 = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int qtde = Integer.parseInt(br.readLine());
        String line = br.readLine();
        String[] values = line.split(" ");
        
        for(int i=0; i < qtde; i++)
        {
            int n = Integer.parseInt(values[i]);
            
            if(n%2 == 0)
            m2++;
        
            if(n%3 == 0)
                m3++;
    
            if(n%4 == 0)
                m4++;
    
            if(n%5 == 0)
                m5++;
       }
       	
   	System.out.println(m2 + " Multiplo(s) de 2");
    System.out.println(m3 + " Multiplo(s) de 3");
    System.out.println(m4 + " Multiplo(s) de 4");
    System.out.println(m5 + " Multiplo(s) de 5");
    }
}