/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */ 


// Chiedi all’utente la sua email
const email = prompt('Inserisci la tua email');
// console.log(email);

// creo lista
const mailAutorizzate = ['giuliagrifo1@gmail.com', 'marcorossi@hotmail.com', 'nala22@gmail.com'];

const element = document.querySelector('p');

let isValid = false;

// controlla che sia nella lista di chi può accedere
for (let i = 0; i < mailAutorizzate.length; i++ ) {
    const userMail = mailAutorizzate[i];
    
    if (email === userMail) {
        isValid = true;
        element.innerHTML = `${email}: accesso consentito`
    }

}

element.innerHTML = `${email}: accesso negato`

