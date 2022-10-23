function inicio() {

    var escolha = prompt("Escolha as opções: \n1).Calcular Circunferencia \n2). Calcular Área \n3). Sair");

    if (escolha == '1') {
        calcularCircuferencia();
    } else if (escolha == '2') {
        calcularArea();
    } else if (escolha == '3') {
        sair();
    } else {
        erro();
    }
    
}

function calcularCircuferencia() {

    for (var i=0; i<3; i++) {
        var raio = parseInt(prompt("Qual o raio do circulo?"));
        alert(`A circunferência é ${2 * 3.14 * raio}`);
    }
    
    inicio();
    
}


function calcularArea() {
    for (var i=0; i<3; i++) {
        var raio = parseInt(prompt("Qual o raio do circulo"));
        var area = (raio * raio) * 3.14;
        alert(`A área do circúlo é: ${area.toFixed(2)}`);
    }

    inicio();
}

function sair() {
    var confirma = confirm("Deseja mesmo sair?") 
    
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
    
}

function erro() {
    alert("Para de burlar o sistema!");
    inicio();
}


inicio();