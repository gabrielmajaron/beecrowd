
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;
import java.util.Arrays;


public class MyClass {
    
    static String[] losers;
    static char[] correctSignal;
    
    public static char getSignal(String expression){
        int n1, n2, n3;
        n1 = Integer.parseInt(expression.split(" ")[0]);
        n2 = Integer.parseInt((expression.split(" ")[1]).split("=")[0]);
        n3 = Integer.parseInt((expression.split(" ")[1]).split("=")[1]);
        
        if(n1 + n2 == n3)
            return '+';
        
        if(n1 - n2 == n3)
            return '-';
    
        if(n1 * n2 == n3)
            return '*';
        
        return 'I';
    }
    
    
    public static String getLoser(String str)
    {
        String player;
        char answer;
        int index;

        player = str.split(" ")[0];
        index = Integer.parseInt(str.split(" ")[1])-1;
        answer = str.split(" ")[2].charAt(0);
    
        if(correctSignal[index] != answer)
            return player;
            
        return "";
    }
    
    public static void sortArray(String []myArray, int size)
    {
        for(int i = 0; i<size-1; i++) {
         for (int j = i+1; j<size; j++) {
            if(myArray[i].compareTo(myArray[j])>0) {
               String temp = myArray[i];
               myArray[i] = myArray[j];
               myArray[j] = temp;
            }
         }
      }
    }

    public static void main(String args[]) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String linha;
        int tl;
        
        while((linha = br.readLine()) != null) 
        {
            linha = linha.replace(" ",""); //<<< por algum motivo (dos casos de teste do uri) tenho que retirar o espaço da linha que representa o N
            int n = Integer.parseInt(linha);
            tl = 0;
            correctSignal = new char[n];
            losers = new String[n];
            
        
            // expressions
            for(int i=0; i<n; i++)
            {
                linha = br.readLine();
                correctSignal[tl++] = getSignal(linha);
            }
            
            tl = 0;
            
            // players
            for(int i = 0; i<n; i++)
            {
                linha = br.readLine();
                String loser;
                if((loser = getLoser(linha)) != "")
                    losers[tl++] = loser;
            }
            
            sortArray(losers,tl);

            if(tl == n)  
                System.out.println("None Shall Pass!");
            else
            if(tl == 0)
                System.out.println("You Shall All Pass!");
            else
            {
                String msg = "";
                for(int l = 0; l < tl; l++)
                {
                    msg+=losers[l];
                    if(l+1!=tl)
                        msg+=" ";
                }
                System.out.println(msg);
            }
        }
    }
}