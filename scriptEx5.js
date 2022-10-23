/* 
    5) Tá quente. Muito quente. Quente demaaaais.
    Vamos fazer um conversor de temperaturas.

    Crie uma função chamada converterCelsiusFahrenheit. 
    Ela deve:
    - Armazenar uma temperatura Celsius em uma variável.
    - Converter-la para  Fahrenheit e escrever a mensagem: "X° C é igual a Y° F". (X e Y são os valores que devem ser substituídos.) 

    Crie uma função chamada converterFahrenheitCelsius. 
    Ela deve: 
    - Armazenar uma temperatura fahrenheit em uma variável.
    - Converter-la para Celsius e escrever a mensagem:  " X° F é igual a Y° C." (X e Y são os valores que devem ser substituídos.) 
*/
function inicio() {

    var siga = parseInt(prompt("Escolha \n1). Converter Celsius p/ Fahrenheit \n2). Converter Fahrenheit p/ Celsius \n3). Converter Kelvin p/ Celsius. \n4). Converter Kelvin p/ Fahrenheit."));

    if (siga == '1') {
        converterCelsiusFahrenheit();
    } else if (siga == '2') {
        converterFahrenheitCelsius();
    } else if (siga == '3') {
        converterKelvinCelsius();
    } else if (siga == '4') {
        converterKelvinFahreinheit();
    } else {
        erro();
    }  

}
function converterCelsiusFahrenheit() {

    var tempCelsius = parseFloat(prompt("Digite a temperatura atual:"));
    var tempTotal = tempCelsius * 1.8 + 32;
    alert(`${tempCelsius} Celsius é igual a ${tempTotal} Fahrenheit.`);
    inicio();
}

function converterFahrenheitCelsius() {

    var tempFahrenheit = parseFloat(prompt("Digite a temperatura atual:"));
    var tempTotal = (tempFahrenheit - 32) * 5/9;
    alert(`${tempFahrenheit} Celsius é igual a ${tempTotal} Fahrenheit.`)
    inicio();
}

function converterKelvinCelsius() {
    var tempKelvin = parseFloat(prompt("Digite a temperatura atual:"));
    var tempTotal = tempKelvin - 273.15;
    alert(`${tempKelvin} Kelvin é igual a ${tempTotal.toFixed(2)} Celcius.`)
    inicio();
}

function converterKelvinFahreinheit() {
    var tempKelvin = parseFloat(prompt("Digite a temperatura atual:"));
    var tempTotal = (tempKelvin * 1.8) - 459.67;
    alert(`${tempKelvin} Kelvin é igual a ${tempTotal.toFixed(2)} Fahreinheit.`)
    inicio();
}
function erro() {
    alert("Pare de burlar o sistema!");
    inicio();
}

inicio();