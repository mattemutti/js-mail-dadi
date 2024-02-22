// - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// - stampa un messaggio appropriato sull’esito del controllo.


// - creare un'array con una lista di mail
const mailList = ['giova@gmail.com', 'lulu@gmail.com', 'martin@email.it', 'titti@libero.it', 'superwoman@mac.com'];

// Creo una variabile boleana che mi servirà per capire se la mail non è presente. In quel caso darò il messaggio di non presenza.
// se lo metto nell'IF dentro al ciclo, mi stamperà tanti "non presente" quante mail non presenti all'interno dell'array.
let notPresent = false


//console.log(mailList);


// - chiedere all'utente la sua mail con un prompt
const userMail = prompt('Inserisci la tua mail')

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
