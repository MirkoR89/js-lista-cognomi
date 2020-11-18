//Chidedere all'utente il cognome
var lastname = prompt("Inserisci il tuo cognome");
console.log(lastname);
//Inserire il cognome all'interno dell'arrey di cognomi
listLastname = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]
listLastname.push(lastname);
//Stampare la lista ordinata alfabeticamente
listLastname.sort();
console.log(listLastname);
// Scrivere la posizione "umana" della lista in cui il nuovo utente si trova
