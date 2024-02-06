// Pari e Dispari
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.



// Scelta pari o dispari
const userChoise = prompt("Scegli pari o dispari");
console.log ("Hai scelto:", userChoise);

// Numero inserito
let userNumber = Number(prompt("Scegli un numero dal 1 al 5"));
console.log ("user:", userNumber);

// Numero random
function random5() {
    const random = Math.floor(Math.random() * 5) + 1
    return random;
}


// Numero Computer
const comNumber = random5();
console.log ("computer:", comNumber);


// Somma dei numeri
let somma = userNumber + comNumber;
console.log ("Somma:", somma);


// Pari o dispari
function paridispari () {
    if (somma % 2 == 0) {
        return "pari"
    } else {
        return "dispari";
    }
}
let risultato = paridispari();
console.log ("Risultato:", risultato);


// Risultato
if (userChoise === risultato) {

    console.log("Hai vinto");

} else {

    console.log("Hai perso");

}
















// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)