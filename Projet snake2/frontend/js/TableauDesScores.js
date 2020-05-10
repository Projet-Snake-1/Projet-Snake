"use strict"; 

window.addEventListener("DOMContentLoaded", afficherScore);

let tableau;
let ligne =""; 

function afficherScore(){
    let xhr = new XMLHttpRequest(); 
    xhr.open('get', "/callscore", true);
    xhr.onload  = function(){
        tableau = JSON.parse(xhr.responseText);
        for (let i = 0; i < tableau.length && i < 5; i++){
            ligne+="<tr><td>"+ tableau[i].pseudo + "</td><td>" + tableau[i].age + "</td><td>" + tableau[i].score + "</td><td>" + tableau[i].code + "</td></tr>";
        }
        document.getElementById("Score").innerHTML = ligne;
    }
    xhr.send();
};

function revenirMenu(){
        window.location = "/FormulaireSnake";
}