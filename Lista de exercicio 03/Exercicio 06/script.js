function valor() {
    var valora = parseInt(prompt("Digite o valor A: "));
    var valorb = parseInt(prompt("Digite o valor B: "));
    var valorc = parseInt(prompt("Digite o valor C: "));

    var quadraa = valora ** 2;
    var quadrab = valorb ** 2;
    var quadrac = valorc ** 2;

    var soma = quadraa + quadrab + quadrac;

    alert("A soma dos quadrados dos valores digitados é " + soma);
}