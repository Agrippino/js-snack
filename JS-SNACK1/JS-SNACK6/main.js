//creo un valore booleano che
let utenteHaiVinto=false
//creo un ciclo che continuerà a girare finchè i numeri concidono
while (utenteHaiVinto==false){
    let numeroComputer = Math.floor(Math.random() *11);
    console.log("il numero del computer è" + numeroComputer); 
    let numeroUtente = parseInt(prompt("Inserisci qui il tuo numero"));  
    console.log("il numero del computer è" + numeroUtente); 

if (numeroComputer == numeroUtente){
    utenteHaiVinto=true;
    console.log("vittoria utente");
    utenteHaiVinto = ("Hai indovinato, complimenti!");
}
}
    

document.getElementById("demo").innerHTML = utenteHaiVinto;
