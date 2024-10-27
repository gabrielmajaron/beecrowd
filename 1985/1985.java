import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;

public class MyClass {
    public static void main(String args[]) throws IOException{
        
        
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       
       	
        double [][]matriz = new double[][] { 
            {1001, 1.50}, {1002, 2.50}, 
            {1003, 3.50}, {1004, 4.50},
            {1005, 5.50}
        };
       
       int n = Integer.parseInt(br.readLine());
       
       float sum = 0;
       for(int i=0; i < n; i++)
       {
           String[] line = br.readLine().toString().split(" ");
            int num = Integer.parseInt(line[0]);
            int qtde = Integer.parseInt(line[1]);
            for(int j=0; j<5; j++)
            {
                if(matriz[j][0] == num)
                {
                    sum+=qtde*matriz[j][1];
                    break;
                }
            }
       }
       System.out.printf("%.2f\n", sum);
       
    }
}