function valor(){
    var valora = parseFloat(prompt("Digite um valor A: ")) 
    var valorb = parseFloat(prompt("Digite outro valor B: "))
   
   
    var valorc = valora
    var valora = valorb
    var valorb = valorc

    alert("O valor A virou " + valora )

    alert("O valor B virou " + valorc)
}