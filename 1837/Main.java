// DUVIDAS
// NOITES SEM DORMIR
// DESISTO DA MATEMÁTICA
// PQ O RESTO DE 7/3 É 1 MAS O RESTO DE -7/3 É 2???
// https://www.4devs.com.br/resto_da_divisao



import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int a = leitor.nextInt();
        int b = leitor.nextInt();
        int q, r;

        if (a >= 0) // se 'a' for positivo, só pega o quociente e resto e printa
        {
        	q = a / b;
        	r = a % b;	
        } 
        else // se 'a' for negativo (caso -7 3, por exemplo)
        {
        	int dividendoPositivo = 0, y = 0;
        	
        	if (b < 0) // caso o dividendo é negativo, deixa ele positivo
                dividendoPositivo = b * -1;
        	else 
                dividendoPositivo = b;
        	
        	for (r = 0; r < dividendoPositivo; r++)  
            {
        		y = a - r; // obtém a diferença entre o divisor e o resto que está sendo incrementado
                System.out.println(y);

        		if (y % b == 0) 
                // se o resto da divisão do número negativo da vez for zero, 
                // ou seja, se encontrou um número negativo que dividido por 3 não possui resto,  
                // então encontramos o y
                    break;
        	}

        	q = y / b; 
            // agora dividimos o -9 por 3 e obtem -3
            // o r será sempre o 'b - 1' ??
            // r = 2
            // então saída é: -3 2
        }
        
      //  System.out.println(q + " " + r);
    }	
}

