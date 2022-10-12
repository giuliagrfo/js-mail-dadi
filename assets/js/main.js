/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */ 


// Chiedi all’utente la sua email
const email = prompt('Inserisci la tua email');
// console.log(email);
// creo lista
const mailAutorizzate = ['giuliagrifo1@gmail.com', 'marcorossi@hotmail.com', 'nala22@gmail.com'];

let allowed;

const element = document.querySelector('p');

// controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato sull’esito del controllo
for (let i = 0; i < mailAutorizzate.length; i++ ) {
    const userMail = mailAutorizzate[i];
    
    if (email === userMail) {
        allowed = true;
    }

}

if (allowed) {
    element.innerHTML = 'Accesso consentito';
}   else {
    element.innerHTML = 'Accesso negato';
}



// // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
 const userNumber = Math.floor(Math.random()*6) + 1;
 console.log(userNumber);
 const computerNumber = Math.floor(Math.random()*6) + 1;
 console.log(computerNumber);



if (userNumber > computerNumber) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso');

}