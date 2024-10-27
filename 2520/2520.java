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
            int nl, nc;
            
            nl = Integer.parseInt(linha.split(" ")[0]);
            nc = Integer.parseInt(linha.split(" ")[1]);
            
            int XPl = 0, YPl = 0,  XPo = 0, YPo = 0;
            
            for(int i=0; i<nl; i++)
            {
                linha = br.readLine();
                String[] l = linha.split(" ");
        
                for(int j=0; j<nc; j++)
                {
                    
                    if(Integer.parseInt(l[j]) == 1)
                    {
                        XPl = i-1;
                        YPl = j;
                    }
                    else
                    if(Integer.parseInt(l[j]) == 2)
                    {
                        XPo = i-1;
                        YPo = j;
                    }
                }
            }
            
            int passos = 0;
        
            if(XPl > XPo)
                passos = (XPl - XPo);
            else
            if(XPl < XPo)
                passos = (XPo - XPl);
                
            if(YPl > YPo)
                passos += (YPl - YPo);
            else
            if(YPl < YPo)
                passos += (YPo - YPl);
            
            System.out.println(passos);
          }        
 
    }
 
}