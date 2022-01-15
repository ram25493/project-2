function check(){
 
    document.getElementById("button").style.display = "";
    document.getElementById("button").style.display = "none";
    
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;
     
    if (question1 == "Javascript"){
        correct++;
    }
    if (question2 == "Cascading Style Sheets") {
         correct++;
    }
     if (question3 == "Hypertext Markup Language") {
         correct++
     }  
     if (question4 == "1995") {
        correct++
    }  
    if (question5 == "both") {
        correct++
    }  
        quiz.innerHTML = `<button onclick="myFunction()">Restart</button>`;
     document.getElementById("after_submit").style.visibility="visible";
       document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
     
    }
     
    function myFunction() {
        location.reload();
    }