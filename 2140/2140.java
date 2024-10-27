import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;


public class MyClass {
    public static void main(String args[]) throws IOException{
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String linha;
        
        int[] notas = {2, 5, 10, 20, 50, 100};
        
        while((linha = br.readLine())!=null)
        {
            int valorCompra = Integer.parseInt(linha.split(" ")[0]);
            int valorPago = Integer.parseInt(linha.split(" ")[1]);
        
            if(valorCompra == 0 && valorPago == 0)
                return;
        
            int troco = valorPago - valorCompra;
            
            boolean possible = false;
        
            for(int i=0; i<6 && !possible; i++)
            {
                for(int j = i; j<6; j++)
                {
                    if((notas[i] + notas[j]) == troco)
                    {
                        possible = true;
                        break;
                    }
                }
            }
        
            if(possible)
                System.out.println("possible");
            else
                System.out.println("impossible");
        }
        
        
    }
}