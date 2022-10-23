function calcularMeuLanche() {
            
    for (var i=0; i<3; i++) {
        var idade = parseInt(prompt("Digite a idade que quer calcular:"));
        var contLanches = parseInt(prompt("Quantos lanches você come por dia?"));
        let cont = (idade * 365) * contLanches;

        alert(`Você precisa de ${cont} para durar até a idade ${idade}`);
        
    }


}

calcularMeuLanche();
