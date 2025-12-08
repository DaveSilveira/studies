#include <stdio.h>
#include <stdlib.h>

int main(){

    char aplicativo1[100], aplicativo2[100], aplicativo3[100];

    printf("...:::---+++ ABRIDOR DE PROGRAMAS +++---:::...\n");
    
    printf("Digite o local onde esta o primeiro executavel.\n");
    scanf(" %99[^\n]s", aplicativo1);

    printf("Digite o local onde esta o segundo executavel.\n");
    scanf(" %99[^\n]s", aplicativo2);

    printf("Digite o local onde esta o terceiro executavel.\n");
    scanf(" %99[^\n]s", aplicativo3);

    printf("O local 1 corresponde a: %s. \n", aplicativo1);
    printf("O local 2 corresponde a: %s. \n", aplicativo2);
    printf("O local 3 corresponde a: %s. \n", aplicativo3);

    system("pause");

    return(0);
}