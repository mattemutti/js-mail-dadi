// - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// - stampa un messaggio appropriato sull’esito del controllo.


// - creare un'array con una lista di mail
const mailList = ['giova@gmail.com', 'lulu@gmail.com', 'martin@email.it', 'titti@libero.it', 'superwoman@mac.com'];

console.log(mailList);


// - chiedere all'utente la sua mail con un prompt
const userMail = prompt('Inserisci la tua mail')
	
console.log(userMail);


// - confrontare che la mail sia all'interno dell'array

for (let i = 0; i < mailList.length; i++) {
	const element = mailList[i];
	console.log(element);
	
	if (userMail === element){
		console.log('Mail presente');
	} else {
		console.log('mail non presente');
	}
}


// - stampare in console il risultato