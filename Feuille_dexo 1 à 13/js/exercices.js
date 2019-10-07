


function Exo1() {
    var nb_1= 18;
var nb_2= 20;
var resultat= nb_1 + nb_2;
    document.getElementById('resultat-exo1-1').innerHTML= resultat;

}

//Exercice 1.2


function Exo2() {
    var nb_1= 2;
var nb_2= 2;
var resultat= nb_1*nb_2;
    document.getElementById('resultat-exo1-2').innerHTML= resultat;

}

//Exercice 1.3//


function Exo3() {
    var nb_1=12;
var nb_2=5;
var resultat = nb_1 / nb_2;
    document.getElementById('resultat-exo1-3').innerHTML=resultat;
}

//Exercice 1.4//
function getSoustraction() {
 var nb_1 = document.getElementById('exo1-4_input1').value; 
 var nb_2 = document.getElementById('exo1-4_input2').value;
 var resultat = nb_1 - nb_2;
 document.getElementById('exo1-4_resultat').innerHTML = resultat;
}

//Exercice 1.5//
function getMultiplication() {
    var nb_1 = document.getElementById('exo1-5_input1').value; 
    var nb_2 = document.getElementById('exo1-5_input2').value;
    var resultat = nb_1 * nb_2;
    document.getElementById('exo1-5_resultat').innerHTML = resultat;
   }

   //Exercice 2.1//
function getDivision() {
    var nb_1 = document.getElementById('exo2-1_input1').value; 
    var nb_2 = document.getElementById('exo2-1_input2').value;
    var resultat = nb_1 / nb_2;
    document.getElementById('exo2-1_resultat').innerHTML = resultat;
   }

      //Exercice 2.2//
function getAddition() {
    var nb_1 = document.getElementById('exo2-2_input1').value; 
    var nb_2 = document.getElementById('exo2-2_input2').value;
    var equation = nb_1+ "+" +nb_2;
    var resultat = eval(equation)

    document.getElementById('exo2-2_resultat').innerHTML = resultat;
   }

   // Exercice 3//
   function divisioneuclid() {
       var nb_1 = 82;
       var nb_2 = 8;
       var resultat = nb_1 % nb_2;
       document.getElementById('resultat-exo3').innerHTML = resultat;
   }

   // Exercice 4.1//
   var resultat=0;
   document.getElementById('exo4.1').innerHTML = resultat;
   
   function getplus() {

    resultat= resultat+10;
    document.getElementById('exo4.1').innerHTML = resultat;
   }

   function getdivide() {
     resultat =resultat /5;
     document.getElementById('exo4.1').innerHTML = resultat;

   }

   function getMulti8() {
    resultat =resultat *8;
    document.getElementById('exo4.1').innerHTML = resultat;

  }

  function getMoins2() {
    resultat =resultat -2;
    document.getElementById('exo4.1').innerHTML = resultat;

  }

  function getReset() {
      resultat= resultat -resultat;
      document.getElementById('exo4.1').innerHTML = resultat;
  }


  var nbmax=1000;
  var nbmin = 50; 
  function getAleatoire() {
   
    var nombreRandom = Math.floor(Math.random() * (nbmax - nbmin) + nbmin);
    document.getElementById('exo5').innerHTML= nombreRandom;
  }

 
  function Onepara(nb) {
      nb=20;
      var resultat = nb / 2;
    document.getElementById('exo6').innerHTML= resultat;

  }

  function getsous(a,b) {
      var resultat = a-b;
    document.getElementById('exo7').innerHTML= resultat;
  }
getsous(10,4);

function troispara(a,b,c) {
    var divide =a/b;
    var resultat = divide % c;
    document.getElementById('exo8').innerHTML= resultat;

}
troispara(50,20,10);

//Exercice9
function getpounds() {
  var kilo = document.getElementById('exo9_input1').value;
  var resultat = kilo*2.205;
  document.getElementById('exo9_resultat1').innerHTML= resultat;
}

function getkilo() {
    var pounds = document.getElementById('exo9_input2').value;
    var resultat = pounds/2.205;
    document.getElementById('exo9_resultat2').innerHTML= resultat;
  }

  //Exercice10//

  var phrase="";
  function Addsentence() {
      var word = document.getElementById('exo10_input').value;
      phrase = phrase + word;
      document.getElementById('exo10_resultat').innerHTML= phrase;
  }


  function Reset() {
    var phrase="";
    document.getElementById('exo10_resultat').innerHTML= phrase;
  }

  //Exercice 11//
  var cote = Math.floor(Math.random() * (50 - 0.5) + 0.5);
  function Cote() {
    var cote = Math.floor(Math.random() * (50 - 0.5) + 0.5);
  
  }

  function Benef() {
    var mise = document.getElementById('exo11_input1').value;
    document.getElementById('exo11_cote').innerHTML=cote;
    var benef= mise*cote;
    document.getElementById('exo11_resultat').innerHTML = benef;
  }
  
  //Exercice 12//
  function  conversion() {
    var distance = document.getElementById('exo12_input1').value;
    var temps= distance / 1000;
    document.getElementById('exo12_resulttemps').innerHTML = temps;
  }

  //Exercice 13//
  function lscreen() {
    var scree = screen.width;
    document.getElementById('exo13_resultat').innerHTML= scree;
  }

  function Resize() {
    var w= window.innerWidth;
    document.getElementById('exo13_resultat').innerHTML = w;

  }

  function Slide() {
    var slide = document.getElementById("Barre").value;
    console.log(slide);
    var low = document.getElementById("Low").value;
    var medium = document.getElementById("Medium").value;
    var high = document.getElementById("High").value;

    if (0 < slide && slide < 10) {
      low.style.backgroundColor =;
    }

    if (0 < slide && slide < 10) {
      low.style.backgroundColor =;
    }

    if (0 < slide && slide < 10) {
      low.style.backgroundColor =;
    }


  }


