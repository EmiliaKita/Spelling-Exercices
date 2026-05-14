function verifierQuiz(){
    let quest1 = document.getElementById("q1").value 
    console.log(quest1)
    let quest2 = document.getElementById("q2").value
    let quest3 = document.getElementById("q3").value
    let quest4 = document.getElementById("q4").value
    let quest5 = document.getElementById("q5").value
    let quest6 = document.getElementById("q6").value


    if (quest1 === "" || quest2 ==="" || quest3 ==="" || quest4 ==="" || quest5 ==="" || quest6 ==="") 
    {
        alert("Vous n'avez pas répondu à toutes les questions !!!!!!"); 
        return;
    }

    let score = 0;

    if (quest1 === "Paris"){
        score++
    }
    if (quest2 === "la"){
        score++
    }
    if (quest3 === "l'as"){
        score++
    }
    if (quest4 === "là"){
        score++
    }
    if (quest5 === "l'a"){
        score++
    }
    if (quest6 === "là"){
        score++
    }

    if (score === 6) {
        alert("Bravo ! Tout est correct.");
    } else {
        alert("Résultat : " + score + "/6 bonnes réponses.");
    }

} 

