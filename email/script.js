/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.*/

//1-DICHIARO LISTA EMAIL
const validEmail = [ 'puffo@gmail.com', 'giselda@gmail.com', 'matteo@gmail.com', 'samu@gmail.com']
//2-CREO CONST PER LA CONFERMA
let validation = false
//3-CHIEDO DI INSERIRE UNA EMAIL
let userEmail 
 while(!validation) {
    userEmail= prompt("inserisci la tua email")
//4 SE L'EMAIL COINCIDE CON UNA DELLA LISTA EMAIL CAMBIO IL PARAMETRO CONFERMA E INVIO MESSAGIO DELL'ESITO POSITIVO
for (let i=0; i<validEmail.length ; i++) {
    if(userEmail === validEmail[i]){
    validation = true
    }
}
if( validation) {
    alert(`User ${userEmail} puoi entrare 😘`)
//  SE NO, INVIO MESSAGGIO DELL'ESITO NEGATIVO E RITORNO AL PUNTO 3
    
    }else{
    alert("prova un'altra email")
    }
 }
    
    
    
