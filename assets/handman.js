let lsgwords = [
    ["P", "O", "K", "E", "M", "O", "N"], //pokemon
    ["A","L","B","A","T","O","R"], //albator
    ["P","I","N","G","U"], //pingu
    ["B","E","E","T","L","E","J","U","i","C","E"], //beetlejuice
    ["B","A","B","A","R"], //babar
    ["C","O","B","R","A"], //cobra
    ["C","O","S","M","O","C","A","T","S"], //cosmocats
    ["G","U","N","D","A","M"], //gundam
    ["C","O","S","M","O","C","A","T","S"], //cosmocats
    ["B","A","R","B","A","P","A","P","A"], //barbapapa
    ["C","A","N","D","I"], //candy
    ["G","O","L","D","O","R","K"], //goldorak
    ["C","O","S","M","O","c","A","T","S"], //cosmocats
    ["H","E","I","D","i"], //heidi
    ["C","O","S","M","O","c","A","T","S"], //cosmocats
    ["S","C","O","U","B","I","D","O","U","B","I","D","O","U"], //scoubidoubidou
    ["B","É","C","É","B","É","G","É"], //becébégé
    ]

    let random = Math.floor((Math.random()*(lsgwords.length-1))); 

    let lsgword = lsgwords[random];     // choisi un mot dans la liste random
    let rateword = new Array(lsgword.length);
    let error = 0;
    

 // affiche la lettre "enter"
 function printRateword(){
    for (var i = 0; i < rateword.length; i++){
    let ratefield = document.getElementById("ratefield");
    let letter = document.createTextNode(rateword[i]);
    ratefield.appendChild(letter);
    }
}

// visualis les lettres par des soulignement
    for (var i = 0; i < rateword.length; i++){
        rateword[i] = "_ ";
    }


//vérificateur (simple et multiple) de lettre
    let veriflettre = function(){
        let f = document.rateformular; 
        let b = f.elements["selectletter"]; 
        let character = b.value; // lettre tapper "enter"
        character = character.toUpperCase();
        for (var i = 0; i <  lsgword.length; i++){
            if(lsgword[i] === character){
                rateword[i] = character + " ";
                var hit = true;
            }
        b.value = "";
        }

//met à jours "enter"
        let ratefield = document.getElementById("ratefield");
        ratefield.innerHTML=""; 
        printRateword();
        
// si lettre tapper ne ce situe pas dans le mot elle est placer dans la liste "Mauvaise lettres (max.5):"
        if(!hit){
            let enterletter = document.getElementById("enterletter");
            let letter = document.createTextNode(" " + character);
            enterletter.appendChild(letter); 
            error++;
        }

//vérifie que tout les lettres sont trouvée
        let finished = true;
        for (var i = 0; i < rateword.length; i++){
            if(rateword[i] === "_ "){
                finished = false;
            }
        }
        if(finished){
            window.alert("Bien ! t'as vu ??");
        }
        
// 5 fautes max
        if(error === 6){
            window.alert("Raté ... Tu va faire quoi ?!");
        }
    }
    
    function init(){
        printRateword();
    }
    
    window.onload = init;


