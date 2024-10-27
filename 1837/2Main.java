import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String args[])  throws IOException {

       BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 

       String line;
       while ((line = br.readLine()) != null)
       {        
            var values = line.split(" ");
            int a = Integer.parseInt(values[0]);       
            int b = Integer.parseInt(values[1]);

            int q = a/b;
            int r = a%b;
            System.out.println(q + " " + r);
       }
    }
}