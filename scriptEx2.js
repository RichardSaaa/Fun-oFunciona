/*2) Não acabou não com base na questão acima, repita todo o procedimento, mas adicione e exiba mais dois valores nos argumentos: o nome do pet e a espécie dele. 

    Então
    - Exiba o resultado na tela com a mensagem: "Batatinha tem X anos em anos de verdade! Um(a) baleia tem uma relação de Y anos de baleia para cada 1 ano humano". 
    (Batatinha, X, baleia e Y são variáveis que serão substituídas) 
    
    Chame a função três vezes com diferentes conjuntos de valores.  
    */

    function calcularIdadePet() {
        
        let escolha = prompt("Digite uma string das escolhas abaixo: \n1).Dog \n2).Gato \n3).Coelho");
        let idade = parseInt(prompt("Digite a idade do seu pet:  "));
        let especie = prompt("Qual a espécie do pet?");

        let dog = (idade * 7) /2;
        let cat = (idade * 15) /2;
        let coelho = (idade * 12)/ 2;


            if(escolha == 'dog' || escolha == 'Dog' || escolha == 'DOG' || escolha == '1') {
            if(isNaN(idade) || idade == "") {
                alert("Não tente burlar o sistema!.");
                calcularIdadePet();
                } else if (idade <= 0) {
                    alert("Digite um númemero maior que 0!.");
                    calcularIdadePet();
                } else {
                    alert(`Seu ${especie} tem ${dog} em anos de verdade! Um(a) ${especie} tem uma relação de ${dog} anos de ${especie} para cada 1 ano humano`);
                    calcularIdadePet();
                }
            }

            if(escolha == 'cat' || escolha == 'Cat' || escolha == 'CAT' || escolha == '2') {
                if(isNaN(idade) || idade == "") {
                    alert("Não tente burlar o sistema!.");
                    calcularIdadePet();
                } else if (idade <= 0) {
                    alert("Digite um númemero maior que 0!.");
                    calcularIdadePet();
                } else {
                    alert(`Seu ${especie} tem ${cat} em anos de verdade! Um(a) ${especie} tem uma relação de ${cat} anos de ${especie} para cada 1 ano humano`);
                    calcularIdadePet();
                }
            }

            if (escolha == 'coelho' || escolha == "Coelho" || escolha == "COELHO" || escolha == '3') {
                if(isNaN(idade) || idade == "") {
                    alert("Não tente burlar o sistema!.");
                    calcularIdadePet();
                } else if (idade <= 0) {
                    alert("Digite um número maior que 0!");
                    calcularIdadePet();
                } else {
                    alert(`Seu ${especie} tem ${coelho} em anos de verdade! Um(a) ${especie} tem uma relação de ${coelho} anos de ${especie} para cada 1 ano humano`);
                    calcularIdadePet();
                }
            }
        }

        calcularIdadePet();