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
            String[] values = linha.split(" ");
            
            if(values.length < 3)
                break;
            
            int lado1 =  Integer.parseInt(values[0]); 
            int lado2 = Integer.parseInt(values[1]); 
            int porcentLegislacao = Integer.parseInt(values[2]);             
            
            int area = lado1 * lado2;
            double ladoTerreno = area/((double)porcentLegislacao/(double)100);
            ladoTerreno = Math.sqrt(ladoTerreno);

            System.out.println((int)ladoTerreno+"");
        }
    }
}