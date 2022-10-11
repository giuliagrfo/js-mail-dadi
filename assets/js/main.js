/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */ 


// Chiedi all’utente la sua email
const email = prompt('Inserisci la tua email');
// console.log(email);

// creo lista
const mailAutorizzate = ['giuliagrifo1@gmail.com', 'marcorossi@hotmail.com', 'nala22@gmail.com'];

// controlla che sia nella lista di chi può accedere
for (let i = 0; i < mailAutorizzate.length; i++ ) {
    const userMail = mailAutorizzate[i];
    // console.log(user);

    if (email === userMail) {
        console.log(`${email} 'accesso consentito'`);

    } else {
        console.log('accesso negato');
    }

}


// for (let i = 0 )

