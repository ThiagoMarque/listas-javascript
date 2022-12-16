function valor(){
    var comprimento = parseFloat(prompt("Digite o valor do comprimento : "));
    var largura = parseFloat(prompt("Digite o valor da largura : "));
    var altura = parseFloat(prompt("Digite o valor da altura : "));

    var volume = comprimento * largura * altura

    alert("O volume da caixa é " + volume)
}