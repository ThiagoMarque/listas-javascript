function valor(){
    var cotacao = parseFloat(prompt("Digite o valor da cotação : "));
    var dolar = parseFloat(prompt("Digite a quantos dolares tem : "));

    var real = cotacao * dolar;
    alert("Você possui R$ " + real );
}