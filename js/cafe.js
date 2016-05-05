document.getElementById('botao-simular-cafe').onclick = function(){
  var radios_ano = document.getElementsByName("group1");
  for (var cont = 0; cont < radios_ano.length; cont++) {
      if (radios_ano[cont].checked) {
          console.log("Ano: " + cont);
          var select_ano = cont;
      }
  }

  var radios_quant = document.getElementsByName("group2");
  for (var i = 0; i < radios_quant.length; i++) {
      if (radios_quant[i].checked) {
          console.log("Quant: " + i);
          var select_quant = i;
      }
  }

  if((select_quant === 0) && (select_ano === 0)){
    $('#valor-cafe').text("8.069,41");
  }else if ((select_quant === 0) && (select_ano === 1)) {
    $('#valor-cafe').text("21.065,28");
  }else if ((select_quant === 0) && (select_ano === 2)) {
    $('#valor-cafe').text("41.995,26");
  }else if ((select_quant === 0) && (select_ano === 3)) {
    $('#valor-cafe').text("75.703,20");
  }else if ((select_quant === 0) && (select_ano === 4)) {
    $('#valor-cafe').text("217.419,88");
  }


  else if ((select_quant === 1) && (select_ano === 0)) {
    $('#valor-cafe').text("16.138,82");
  }else if ((select_quant === 1) && (select_ano === 1)) {
    $('#valor-cafe').text("42.130,56");
  }else if ((select_quant === 1) && (select_ano === 2)) {
    $('#valor-cafe').text("83.990,52");
  }else if ((select_quant === 1) && (select_ano === 3)) {
    $('#valor-cafe').text("151.406,39");
  }else if ((select_quant === 1) && (select_ano === 4)) {
    $('#valor-cafe').text("434.839,75");
  }


  else if ((select_quant === 2) && (select_ano === 0)) {
    $('#valor-cafe').text("24.208,24");
  }else if ((select_quant === 2) && (select_ano === 1)) {
    $('#valor-cafe').text("63.195,84");
  }else if ((select_quant === 2) && (select_ano === 2)) {
    $('#valor-cafe').text("125.985,78");
  }else if ((select_quant === 2) && (select_ano === 3)) {
    $('#valor-cafe').text("227.109,59");
  }else if ((select_quant === 2) && (select_ano === 4)) {
    $('#valor-cafe').text("652.259,63");
  }


  else if ((select_quant === 3) && (select_ano === 0)) {
    $('#valor-cafe').text("32.277,65");
  }else if ((select_quant === 3) && (select_ano === 1)) {
    $('#valor-cafe').text("84.261,13");
  }else if ((select_quant === 3) && (select_ano === 2)) {
    $('#valor-cafe').text("167.981,04");
  }else if ((select_quant === 3) && (select_ano === 3)) {
    $('#valor-cafe').text("302.812,79");
  }else if ((select_quant === 3) && (select_ano === 4)) {
    $('#valor-cafe').text("869.679,51");
  }


  else if ((select_quant === 4) && (select_ano === 0)) {
    $('#valor-cafe').text("40.347,06");
  }else if ((select_quant === 4) && (select_ano === 1)) {
    $('#valor-cafe').text("105.326,41");
  }else if ((select_quant === 4) && (select_ano === 2)) {
    $('#valor-cafe').text("209.976,29");
  }else if ((select_quant === 4) && (select_ano === 3)) {
    $('#valor-cafe').text("378.515,98");
  }else if ((select_quant === 4) && (select_ano === 4)) {
    $('#valor-cafe').text("1.087.099,39");
  }


  else if ((select_quant === 5) && (select_ano === 0)) {
    $('#valor-cafe').text("80.694,12");
  }else if ((select_quant === 5) && (select_ano === 1)) {
    $('#valor-cafe').text("210.652,82");
  }else if ((select_quant === 5) && (select_ano === 2)) {
    $('#valor-cafe').text("419.952,59");
  }else if ((select_quant === 5) && (select_ano === 3)) {
    $('#valor-cafe').text("757.031,97");
  }else if ((select_quant === 5) && (select_ano === 4)) {
    $('#valor-cafe').text("2.174.198,77");
  }

};
