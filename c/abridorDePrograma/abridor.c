#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){

    printf("...:::---+++ ABRIDOR DE PROGRAMAS +++---:::...\n");

    char aplicativo1[100], aplicativo2[100], aplicativo3[100];
    //verificação da existência do arquivo de leitura
    FILE *arquivoDeLeitura;
    arquivoDeLeitura = fopen("atalhos.txt", "r");

    //condicional para verificação da existencia de atalhos.txt
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

    //leitura das linhas dos caminhos para execução
    fgets(aplicativo1, 99, arquivoDeLeitura);
    fgets(aplicativo2, 99, arquivoDeLeitura);
    fgets(aplicativo3, 99, arquivoDeLeitura);

    fclose(arquivoDeLeitura);

    //removendo a quebra de linha
    aplicativo1[strcspn(aplicativo1, "\n")] = 0;
    aplicativo2[strcspn(aplicativo2, "\n")] = 0;
    aplicativo3[strcspn(aplicativo3, "\n")] = 0;

    char comando [100];

    printf("Aplicativos verificados em atalhos.txt \n");

    printf("Abrindo programa 1...\n");
    sprintf(comando, "start \"\" \%s\"", aplicativo1);
    system(comando);

    printf("Abrindo programa 2...\n");
    sprintf(comando, "start \"\" \%s\"", aplicativo2);
    system(comando);

    printf("Abrindo programa 3...\n");
    sprintf(comando, "start \"\" \%s\"", aplicativo3);
    system(comando);

    system("pause");

    return(0);
}