function valor(){
    var valora = parseInt(prompt("Digite o valor A: "));
    var valorb = parseInt(prompt("Digite o valor B: "));
    var valorc = parseInt(prompt("Digite o valor C: "));
    var valord = parseInt(prompt("Digite o valor D: "));

    var valorp = valora * valorc;
    var valors = valorb + valord;

    alert(valora + " X " + valorc + " = " + valorp);
    alert(valorb + " + " + valord + " = " + valors);
}