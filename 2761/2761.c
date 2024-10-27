#include <stdio.h>
#include <string.h>

// LINGUAGEM: C99 (gcc 4.8.5, -std=c99 -O2 -lm) [+0s]
// Ex entrada: 12 3.141560 a Uri online
int main()
{
    int a;
    float b;
    char c, aux;
    char d[50];
    scanf("%d %f %c", &a, &b, &c);
    scanf("%c", &aux); // skip space
    gets(d);
    printf("%d%f%c%s\n",a,b,c,d);    
    printf("%d\t%f\t%c\t%s\n",a,b,c,d);
    printf("%10d%10f%10c%10s\n",a,b,c,d);
    return 0;
}
