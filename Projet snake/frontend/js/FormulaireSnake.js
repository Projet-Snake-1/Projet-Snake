"use strict";

// Envoie les informations contenues dans le formulaire dans la base de données

document.addEventListener("DOMContentLoaded", initPage);
window.addEventListener("DOMContentLoaded", afficherPays);

function initPage(){
    let formJoueur = document.getElementById("formJoueur");
    formJoueur.addEventListener("submit", envoyerForm);
}

function envoyerForm(event){
    let form = this;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/sendform?pseudoVar=' + form.pseudo.value + '&ageVar=' + form.age.value + '&paysVar=' + form.pays.value, true);
    xhr.onload = function(){
        window.location ="/MenuProject?pseudoVar=" + form.pseudo.value;
    }
    xhr.send();
    
}

function afficherPays(){
    let xhr = new XMLHttpRequest(); 
    xhr.open('get', "/listepays", true);
    xhr.onload  = function(){
        let tableau = JSON.parse(xhr.responseText);
        let selectpays;
        for (let i = 0; i < tableau.length; i++){
            selectpays+="<option>"+ tableau[i].nomPays + "</option>";
        }
        document.getElementById("listePays").innerHTML = selectpays;
    }
    xhr.send();
};


/*
function envoyerForm(Event){
    let pseudo = document.getElementById("pseudo").value;
    let age = document.getElementById("age").value;
    let pays = document.getElementById("pays").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/sendform?pseudoVar=' + pseudo + '&ageVar=' + age + '&paysVar=' + pays, true);
    xhr.onload = function(){
        
        window.location = "/MenuProject?pseudoVar=" + pseudo;
    }
    xhr.send();
}*/