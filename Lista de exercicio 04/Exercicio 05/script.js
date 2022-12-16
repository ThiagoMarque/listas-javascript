function valor() {
    var nota1 = parseFloat(prompt("Digite a 1° nota: "));
    var nota2 = parseFloat(prompt("Digite a 2° nota: "));

    var media = (nota1 + nota2) / 2

    if (media >= 6) {
        alert( "Aprovado");
    }
    else {
        alert("Reprovado");
    }
}
