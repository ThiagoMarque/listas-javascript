

    var valora = parseFloat(prompt("Digite o valor A: "));
    var valorb = parseFloat(prompt("Digite o valor B: "));
    var valorc = parseFloat(prompt("Digite o valor C: "));
    var valord = parseFloat(prompt("Digite o valor D: "));

   var AmB = valora + valorb;
   var AmC = valora + valorc;
   var AmD = valora + valord;
   var BmC = valorb + valorc;
   var BmD = valorb + valord;
   var CmD = valorc + valord;

   var AxB = valora * valorb;
   var AxC = valora * valorc;
   var AxD = valora * valord;
   var BxC = valorb * valorc;
   var BxD = valorb * valord;
   var CxD = valorc * valord;

   document.write("valor A = "+ valora + "valor B " + valorb + "valor C " + valorc + "valor D " + valord );
   document.write(valora + " + " + valorb + " = " + AmB );
   document.write(valora + " + " + valorc + " = " + AmC );
   document.write(valora + " + " + valord + " = " + AmD );
   document.write(valorb + " + " + valorc + " = " + BmC );
   document.write(valorb + " + " + valord + " = " + BmD );
   document.write(valorc + " + " + valord + " = " + CmD );
   
  
 
   document.write("valor A = "+ valora + "valor B " + valorb + "valor C " + valorc + "valor D " + valord );
   document.write(valora + " X " + valorb + " = " + AxB  );
   document.write(valora + " X " + valorc + " = " + AxC  );
   document.write(valora + " X " + valord + " = " + AxD  );
   document.write(valorb + " X " + valorc + " = " + BxC  );
   document.write(valorb + " X " + valord + " = " + BxD  );
   document.write(valorc + " X " + valord + " = " + CxD  );
