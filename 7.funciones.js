let verdadero =true;

while(verdadero == true){
    let eleccion = prompt("Escribe operacion a realizar  sumar,restar,dividir,multiplicar o salir: ");
    switch(eleccion){
        case "sumar":
            sumar();
            break;
        case "restar":
            restar();
            break;
        case "multiplicar":
            multiplicar();
            break;
        case "dividir":
            dividir();
            break;
        case "salir":
            salir();
            verdadero = false;
            break;
        default:
            alert("Elije una opcion valida: ")
            break;
    }
}


function numeros(){
    let a = parseInt(prompt("Ingresa el primer numero: "));
    let b = parseInt(prompt("Ingresa el segundo numero: "));
    return {a,b};
}

function sumar(){
    let valores = numeros();
    let resultado = valores.a + valores.b;
    return alert(resultado);
}

function restar(){
    let valores = numeros();
    let resultado = valores.a - valores.b;
    alert(resultado);

}

function dividir(){
    let valores = numeros();
    if (valores.b ===0 ){
        alert('No se puede dividir por Cero');
        dividir();
    }else{
        let resultado = valores.a / valores.b;
        alert(resultado);

    }
}

function multiplicar(){
    let valores = numeros();
    resultado = valores.a*valores.b;
    return alert(resultado);

}

function salir(){
    return alert("Hasta la proxima");

}