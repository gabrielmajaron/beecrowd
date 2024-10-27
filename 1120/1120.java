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
            int v1 = Integer.parseInt(linha.split(" ")[0]);
            String v2 = linha.split(" ")[1]+"";
            
            if(v1 == 0 && v2.length()==1 && Integer.parseInt(v2) == 0)
                return;
                
            
            //while(v2.contains(String.valueOf(v1)))
            v2 = v2.replace(String.valueOf(v1),"");
                
                
            if(v2 == "") 
                v2 = "0";
             
            String v3 = "";
            for(int i=0;i<v2.length();i++)
            {
                if(v2.charAt(i) == '0' && v3 != "")
                    v3+=v2.charAt(i);
                else
                if(v2.charAt(i) != '0')
                    v3+=v2.charAt(i);
            }
            
            if(v3 == "")
                v3 = "0";
            
            System.out.println(v3);
            
        }
    }
}