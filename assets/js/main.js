/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */ 

// STRUMENTI: const, prompt, array, 

// Chiedi all’utente la sua email
const email = prompt('Inserisci la tua email');
// console.log(email);

// controlla che sia nella lista di chi può accedere
const autorizzati = [email];
console.log(`${autorizzati} accesso consentito`);


// for (let i = 0 )