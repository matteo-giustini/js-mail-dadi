/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

const userNumber = Math.floor(Math.random() * 6) + 1

const CPUNumber = Math.floor(Math.random() * 6) + 1

if( userNumber > CPUNumber){
    alert(`il numero di user: ${userNumber} è maggiore di quello della CPU: ${CPUNumber}, HAI VINTO!🤩`)
} else if (userNumber < CPUNumber){
    alert(`il numero di user: ${userNumber} è minore di quello della CPU: ${CPUNumber}, HAI PERSO`)
} else{
    alert(`il numero di user: ${userNumber} è uguale di quello della CPU: ${CPUNumber}, PAREGGIO! (mezza sconffita)`)
}

