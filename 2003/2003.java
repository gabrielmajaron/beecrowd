import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;


public class MyClass {
    public static void main(String args[]) throws IOException{
      
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line;
        int hAtraso = 1;
        int horaCombinada = 8;
       	while((line = br.readLine())!= null)
       	{
       	    int hora = Integer.parseInt(line.split(":")[0]);
            int min = Integer.parseInt(line.split(":")[1]);
        
            hora+=hAtraso;
        
            if(hora < horaCombinada)
                System.out.println("Atraso maximo: 0");
            else
            {
                int horasAtrasadas = hora-horaCombinada;
                int minAtrasados = hora == horaCombinada ? 0 : horasAtrasadas*60;
                
                minAtrasados+=min;
                System.out.println("Atraso maximo: "+minAtrasados);
            }
       	}
    }
}