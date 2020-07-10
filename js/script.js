function minhaFuncao(){
    document.getElementById("minhafunc").innerHTML=
    "Acertou Parabens!";
}
var x,y,z;// Declare 3 variaveis
x=6;//defina o valor 5 para x
y=5;//defina  o valor 6 para y
z=x+y;//defina que valor de z e a soma de x e y 
document.getElementById("minhaid").innerHTML = "O valor de Z e "+z+"";

document.getElementById("somando").innerHTML = (10+10)*10;


var primeironome,primeiroNome
primeironome = "Bernabe"
primeiroNome = "foca"
document.getElementById("idnome").innerHTML = primeironome;

function validateForm(){
    var x = document.forms["meuForm"]["fname"].value;
    if(x == ""){
    alert("digite seu nome");
    return false;
 }
}