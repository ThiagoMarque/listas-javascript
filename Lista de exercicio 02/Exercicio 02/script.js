function votos() {
    var eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
    var votobranco = parseInt(prompt("Digite a quantidade de voto em brancos : "));
    var votonulo = parseInt(prompt("Digite a quantidade de votos nulos: "));
    var votovalido = parseInt(prompt("Digite a quantidade de votos validos: "));

    total_branco = 100 * votobranco / eleitores;
    total_nulo = 100 * votonulo / eleitores;
    total_valido = 100 * votovalido / eleitores;

    document.write("A PORCENTAGEM DOS VOTOS BRANCOS SÃO: " + total_branco );
    document.write("A PORCENTAGEM DOS VOTOS NULOS SÃO: " +  total_nulo );
    document.write("A PORCENTAGEM DOS VOTOS VALIDOS SÃO: " + total_valido);

  

}