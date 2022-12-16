function voto() {
    var candidatoa = parseInt(prompt("Digite a quantidades de votos para o candidato A: "));
    var candidatob = parseInt(prompt("Digite a quantidades de votos para o candidato B: "));
    var candidatoc = parseInt(prompt("Digite a quantidades de votos para o candidato C: "));
    var votobranco = parseInt(prompt("Digite a quantidades de votos em brancos: "));
    var votonulo = parseInt(prompt("Digite a quantidades de votos nulos: "));

    var votosvalidos = candidatoa + candidatob + candidatoc;

    var eleitores = votobranco + votonulo + votosvalidos;

    var perca = candidatoa / eleitores * 100;

    var percb = candidatob / eleitores * 100;

    var percc = candidatoc / eleitores * 100;

    var branco = votobranco / eleitores * 100;

    var nulos = votonulo / eleitores * 100;

    var validos = votosvalidos / eleitores * 100;

    alert("a quantidade de eleitores é : " + eleitores);
    alert("a porcentagem de votos valido para o candidato a é de : " + perca )
    alert("a porcentagem de votos valido para o candidato b é de : " + percb )
    alert("a porcentagem de votos valido para o candidato c é de : " + percc )
    alert("a porcentagem de votos nulos em relação aos eleitores é de : " + nulos )
    alert("a porcentagem de votos em branco em relação aos eleitores  é " + branco )
}

