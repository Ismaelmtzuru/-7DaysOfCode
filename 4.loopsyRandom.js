let numero = Math.floor(Math.random() *11);
// para ver el número en la consola  
// console.log(numero);
let verdadero = true;
contador = 1;
while ( verdadero){
    let adivinar = parseInt(prompt("Adivina el numero entre el 0 y 10:"));
    if (adivinar == numero){
        alert("Felicidades, haz acertado");
        verdadero = false
    }else{
        oportunidades = 3-contador;
        contador +=1;
        if (contador > 3){
            alert("Perdiste, ya fueron 3 intentos");
            alert(`El número secreto era ${numero}`)
            break;
        } else{
            alert(`Tienes ${oportunidades} ${(oportunidades >1) ? "oportunidades":"oportunidad"} más` );
        }
    }
}