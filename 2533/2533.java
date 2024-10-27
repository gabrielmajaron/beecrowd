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
            int n = Integer.parseInt(linha);
            
            double sum_Num = 0, sum_Denom = 0;
            
            for(int i=0; i<n; i++)
            {
                linha = br.readLine();
                int nota = Integer.parseInt(linha.split(" ")[0]);
                int media = Integer.parseInt(linha.split(" ")[1]);
        
                sum_Num = sum_Num + (nota * media);
                sum_Denom = sum_Denom + (media * 100);
                
            }
            System.out.printf("%.4f\n", sum_Num/sum_Denom);
        }
 
    }
 
}