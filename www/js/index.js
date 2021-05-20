function addTask() {

    var poids = document.getElementById('poids');
    var taille = document.getElementById('taille');


    var poidsvalue = parseFloat(poids.value)
    var taillevalue = parseFloat(taille.value)


    var bmi = Math.round((poidsvalue / (taillevalue * taillevalue)) * 10000);
    if (bmi <= 18.5)
        alert("votre bmi est=" + Math.ceil(bmi) + " et vous etes maigre");
    if (18.5 < bmi && bmi< 24.9)
        alert("votre bmi est=" + Math.ceil(bmi) + " et vous etes normal");
    if (25 < bmi && bmi< 29.9)
        alert("votre bmi est=" + Math.ceil(bmi) + " et vous etes obese");
    if(bmi>=30)
        alert("votre bmi est=" + Math.ceil(bmi) + " et vous etes tres obese");
    

}