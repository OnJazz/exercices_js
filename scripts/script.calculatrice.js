var currentInput = 0;

var changerValeurInput = (nombre) => {
    let monInput = document.getElementById("nbr" + (currentInput+1));
    monInput.value += nombre;
    majResultat();
}
var changerValeurOperateur = (opr) => {
    let monInput = document.getElementById("operateur");
    monInput.value = opr;
    currentInput = (currentInput + 1)%2;
    majResultat();
}

var changerEcritureInput = (input) => {
    if(input.id === "nbr1"){
        currentInput = 0;
    }
    else{
        currentInput = 1;
    }
}

var majResultat = () => {
    let nbr1 = +document.getElementById("nbr1").value;
    let nbr2 = +document.getElementById("nbr2").value;
    let opr  = document.getElementById("operateur").value;
    let res;
    if(opr === "*"){
        res = nbr1 * nbr2;
    }
    else if(opr === "+"){
        res = nbr1 + nbr2;
    }
    else if(opr === "-"){
        res = nbr1 - nbr2;
    }
    else{
        res = nbr1 / nbr2
    }
    document.getElementById("resultat").innerText = res;
}

var reset = () => {
    document.getElementById("nbr1").value = 0;
    document.getElementById("nbr2").value = 0;
    document.getElementById("operateur").value = "+";
    majResultat();
}

var resetOneInput= () =>{
    let monInput = document.getElementById("nbr" + (currentInput+1));
    monInput.value = monInput.value.substring(0, (monInput.value.length-1));
    majResultat();

}