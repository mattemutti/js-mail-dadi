// - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// - stampa un messaggio appropriato sull’esito del controllo.


// - creare un'array con una lista di mail
const mailList = ['giova@gmail.com', 'lulu@gmail.com', 'martin@email.it', 'titti@libero.it', 'superwoman@mac.com'];

// Creo una variabile boleana che mi servirà per capire se la mail non è presente. In quel caso darò il messaggio di non presenza.
// se lo metto nell'IF dentro al ciclo, mi stamperà tanti "non presente" quante mail non presenti all'interno dell'array.
let notPresent = false


//console.log(mailList);


// - chiedere all'utente la sua mail con un prompt
const userMail = prompt('Inserisci la tua mail');

//console.log(userMail);

// - confrontare che la mail sia all'interno dell'array
for (let i = 0; i < mailList.length; i++) {
	const element = mailList[i];
	//console.log(element);
	

	if (userMail === element){
		// - stampare in console il risultato
		console.log('Mail presente');
		notPresent = true
	}


}

//console.log(notPresent);

// Condizione per stampare in console un solo messaggio di non presenza
if (notPresent == false){
	console.log('Mail non presente');
}



// Ex 2 - DADI


// - creare 2 variabili con la generazione di un numero random e scriverli in console

const nUser = Math.round(Math.random()*5)+1;  // crea un numero arrotondato intero casuale tra 1 e 6
console.log(nUser);

const nPc = Math.round(Math.random()*5)+1;  // crea un numero arrotondato intero casuale tra 1 e 6
console.log(nPc);

// - controllare se il numero del giocateore è più o meno grande del numero del computer

if (nUser === nPc){
	console.log("PARITà RIPROVARE");
} else if (nUser < nPc){
	console.log('VINCE LA MACCHINA');
} else {
	console.log("VINCE L'UMANO");

}



// - stampare chi è il vincitore
