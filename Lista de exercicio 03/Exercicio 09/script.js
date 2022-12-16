function valor(){
    var salariomensal = parseFloat(prompt("Digite o salario mensal: "));
    var percentualreajuste = parseFloat(prompt("Digite o valor do  percentual de reajuste: "));

    var novosalario  = salariomensal + (salariomensal * percentualreajuste / 100);

    alert("O valor do novo salario é R$ " + novosalario)
 }