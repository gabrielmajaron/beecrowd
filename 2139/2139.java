import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;


public class MyClass {
    public static void main(String args[]) throws IOException{
      
     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
     String line;
     
     int[] qtDiasMes = new int[12];
     boolean is31 = true;
     int tl = 0;
     
    for(int i=0; i<12; i++)
    {
        if(is31) 
            qtDiasMes[tl++] = 31;
        else
            qtDiasMes[tl++] =30;
    
        if(i != 6)
            is31 = !is31;
    }
    
    qtDiasMes[1] = 29;
    
     
     while((line = br.readLine())!=null)
     {
         String[] values = line.split(" ");
         int dia = Integer.parseInt(values[1]);
         int mes = Integer.parseInt(values[0]);
         
         int diasPassados = dia;

        for(int i=0; i<(mes-1); i++)
            diasPassados += qtDiasMes[i];
    
        int restantes = 360-diasPassados;

    if(restantes == 1)
        System.out.println("E vespera de natal!");
    else
    if(restantes < 0)
        System.out.println("Ja passou!");
    else
    if(restantes == 0)
        System.out.println("E natal!");
    else
        System.out.println("Faltam "+restantes+" dias para o natal!");
         
     }
    }
}