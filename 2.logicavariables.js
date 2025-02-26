let nombre = prompt("Cual es tu nombre? ");
let edad = parseInt(prompt("Cual es tu edad? "));
let lenguaje = prompt("cual lenguaje de programación estás estudiando? ");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`)

let pregunta = parseInt(prompt(`¿te gusta estudiar ${lenguaje}, Escribe 1 para Si o 2 para no`))
if (pregunta == 1){
    alert("¡Excelente! Sigue estudiando y serás grande")
}
    else{ 
    alert("¡Uy!, deberias aprender otro lenguaje")
}

