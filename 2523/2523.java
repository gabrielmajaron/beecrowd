import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;

public class MyClass {
    
    public static void main(String args[]) throws IOException {
        
          BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
          String linha;
          while ((linha = br.readLine()) != null)
          {
            String conjunto = linha;
            linha = br.readLine();
            int qtdeL = Integer.parseInt(linha);
            linha = br.readLine();
            String pos = linha;
    
            String msg = "";
            String[] list = pos.split(" ");
            for(int j=0; j < qtdeL; j++)
            {
                msg += conjunto.charAt(Integer.parseInt(list[j])-1);
            }
            System.out.println(msg);
          }        
    }
}



