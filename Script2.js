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
    }
    if ( quest1 !== "Paris" || quest2 !== "la" || quest3 !== "l'as" || quest4 !== "là" || quest5 !== "l'a" || quest6 !== "là" ){
        alert("Votre réponse est incorrect");
    }

    let score = 0;

    if (quest1 === "Paris"){
        alert("Correct !");
        score++
    }
        console.log(score)
    
    
    console.log(quest2)

    if (quest2 === "la"){
        alert("Correct !");
        score++
    }
        console.log(score)


    console.log(quest3)

    if (quest3 === "l'as"){
        alert("Correct !");
        score++
    }
        console.log(score)


    console.log(quest4)

    if (quest4 === "là"){
        alert("Correct !");
        score++
    }
        console.log(score)


    console.log(quest5)

    if (quest5 === "l'a"){
        alert("Correct !");
        score++
    }
        console.log(score)


    console.log(quest6)

    if (quest6 === "là"){
        alert("Correct !");
        score++
    }
        console.log(score)

} 

