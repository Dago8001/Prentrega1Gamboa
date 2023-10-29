
//definición del número a adivinar
let numeroAdivinar = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

//Ciclo de Adivinanza
while (!adivinado) {
    let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    intentos++;

    if (numeroUsuario === numeroAdivinar) {
        adivinado = true;
        alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    } else if (numeroUsuario < numeroAdivinar) {
        alert("El número es mayor, ¡inténtalo de nuevo!");
    } else {
        alert("El número es menor, ¡inténtalo de nuevo!");
    }
}

