
var tab = [];
var Tab = [];
//document.getElementById("Btn").addEventListener("click", ListValue);
function ListValue() {

    var valInput = document.getElementById("Valeur").value;

    if(valInput != ""){
        tab.push(parseFloat(valInput));
        Tab.push(valInput);

        var Vall = "";

        for (i = 0; i < tab.length; i++) {
             Vall = Vall + "Valeur " + (i+1) + ":  " + parseFloat(Tab[i]) + "</br>";
        }

        document.getElementById("paragraph1").innerHTML = Vall;

    }else{

        alert("entrer un nombre svp");

    }  

}

function Calcul() {

    var somme=0;
    var mult=0;
    var variance, moyenne, vari;

    for(i = 0; i < tab.length; i++){
        somme = somme + tab[i];
    }
    moyenne = somme/tab.length;
    
    for (i = 0; i < tab.length; i++) {
        vari = tab[i] - moyenne;
        vari = vari * vari;
        mult = mult + vari;
    }

    variance = mult/tab.length;

    document.getElementById("Moy").innerHTML = moyenne;
    document.getElementById("Var").innerHTML = variance;
 
}

