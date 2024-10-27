import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.*;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        char[][] mapKey = {{'W','Q'},{'E','W'},{'R','E'},{'T','R'},{'Y','T'},{'U','Y'},{'I','U'},{'O','I'},{'P','O'},{'[','P'},{']','['},{'\\',']'},{'S','A'},{'D','S'},{'F','D'},{'G','F'},{'H','G'},{'J','H'},{'K','J'},{'L','K'},
        {';','L'},{'\'',';'},{'X','Z'},{'C','X'},{'V','C'},{'B','V'},{'N','B'},{'M','N'},{',','M'},{'.',','},{'/','.'},{'1','`'},{'2','1'},{'3','2'},{'4','3'},{'5','4'},{'6','5'},{'7','6'},{'8','7'},{'9','8'},{'0','9'},{'-','0'},
        {'=','-'}};
        int size = 43;
        
        String linha;
        while ((linha = br.readLine()) != null)
        {
            for(int i=0; i< linha.length(); i++)
            {
                boolean exists = false;
                for(int j=0; j<size; j++)
                {
                    if(mapKey[j][0] == linha.charAt(i))
                    {
                        System.out.print(mapKey[j][1]);
                        exists = true;
                        break;
                    }
                }
                if(!exists)
                    System.out.print(linha.charAt(i));
            }
            System.out.println();
        }
 
    }
 
}