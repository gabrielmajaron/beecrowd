import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;

public class MyClass {
    public static void main(String args[])  throws IOException{
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       int qtde;
       qtde = Integer.parseInt(br.readLine());
       for(int i=0; i<qtde; i++)
       {
        int item = Integer.parseInt(br.readLine());
        
        int res;
    
        res = item - 2015;
    
        if (res > 0)
            System.out.println((res+1)+" A.C.");
        else if (res < 0)
            System.out.println((res*-1)+" D.C.");
        else
            System.out.println("1 A.C.");
           
       }
        
    }
}