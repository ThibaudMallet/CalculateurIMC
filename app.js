//CONST
const getData = document.getElementById("input-data");
const imcInput = document.getElementById("p");
const reset = document.getElementById("reset");
let sentence = document.getElementById("sentence");

//LISTENER

getData.addEventListener("click", getValue);
reset.addEventListener("click", resetValue);

//FUNCTION

function getValue() {
    const poids = document.getElementById("poids").value;
    const taille = document.getElementById("taille").value;

    let imc = poids/(taille*taille);
    let imcRound = imc.toFixed(1);
    document.getElementById("output").value = imcRound;
    if (imcRound > 35) {
        sentence.value = "Vous êtes à l'indicateur : Obésité morbide.";
    } else  if (imcRound > 29.9) {
        sentence.value = "Vous êtes à l'indicateur : Obésité.";
    } else if (imcRound > 24.9) {
        sentence.value = "Vous êtes à l'indicateur : Surpoids.";
    } else if (imcRound > 18.4) {
        sentence.value = "Vous êtes à l'indicateur : Corpulence normale."
    } else if (imcRound > 15.9) {
        sentence.value = "Vous êtes à l'indicateur : Insuffisance pondérale."
    } else {
        sentence.value = "Vous êtes à l'indicateur : Maigreur extrème."
    }
}


function resetValue() {
    document.getElementById("poids").value = "";
    document.getElementById("taille").value = "";
    document.getElementById("output").value = "";
    document.getElementById("sentence").value = "";
}
function sentenceImc(imcRound) {
    if (25 < imcRound < 29.9) {
        sentence.value = "Vous êtes en surpoids";
    } else {
        sentence.value = "Vous n'êtes pas en surpoids";
    }
}




























/* function calculIMC() {
    const poids = document.getElementById("poids").value;
    console.log(poids);

    const taille = document.getElementById("taille").value;
    console.log(taille);

    const imc = poids/(taille*taille);
    console.log(imc);

        if(25 < imcRound < 29.9) {
        document.getElementById("sentence").value = "Vous êtes en surpoids"
    } else {
        document.getElementById("sentence").value = "Vous n'êtes pas en surpoids"
    }
} */