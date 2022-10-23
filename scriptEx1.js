function calcularIdadePet() {

    let escolha = prompt("Digite uma string das escolhas abaixo: \n1).Dog \n2).Gato \n3).Coelho");
    let idade = parseInt(prompt("Digite a idade do seu pet:  "));

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
            alert(`Seu dog tem ${dog} anos em anos humanos!`);
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
            alert(`Seu gato tem ${cat} anos em anos humanos!`);
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
            alert(`Seu coelho tem ${coelho} em anos humanos.`);
            calcularIdadePet();
        }
    }
    



    }

    calcularIdadePet();
