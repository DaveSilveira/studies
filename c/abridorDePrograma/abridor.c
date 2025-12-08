#include <stdio.h>
#include <stdlib.h>

int main(){

    printf("...:::---+++ ABRIDOR DE PROGRAMAS +++---:::...\n");

    char aplicativo1[100], aplicativo2[100], aplicativo3[100];
    //verificação da existência do arquivo de leitura
    FILE *arquivoDeLeitura;
    arquivoDeLeitura = fopen("atalhos.txt", "r");

    if (arquivoDeLeitura == NULL){
    //Criação do arquivo de leitura
    FILE *arquivoDeLeitura;
    arquivoDeLeitura = fopen("atalhos.txt", "w");
    //prompts de seleção dos locais dos aplicativos
    printf("Digite o local onde esta o primeiro executavel.\n");
    scanf(" %99[^\n]s", aplicativo1);

    printf("Digite o local onde esta o segundo executavel.\n");
    scanf(" %99[^\n]s", aplicativo2);

    printf("Digite o local onde esta o terceiro executavel.\n");
    scanf(" %99[^\n]s", aplicativo3);
    //Salvamento dos locais em texto para uma futura abertura
    printf("O local 1 corresponde a: %s. \n", aplicativo1);
    fprintf(arquivoDeLeitura,"%s \n", aplicativo1);

    printf("O local 2 corresponde a: %s. \n", aplicativo2);
    fprintf(arquivoDeLeitura,"%s \n", aplicativo2);

    printf("O local 3 corresponde a: %s. \n", aplicativo3);
    fprintf(arquivoDeLeitura,"%s \n", aplicativo3);

    fclose(arquivoDeLeitura);
    }

    printf("Aplicativos verificados em atalhos.txt");
    system("pause");

    return(0);
}