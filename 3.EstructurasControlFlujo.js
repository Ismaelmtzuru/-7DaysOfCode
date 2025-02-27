
alert("Elige con número 1 o 2 según corresponda");

let area = parseInt(prompt("Deseas especializarte en front-end(1) o back-end(2):"));
if (area ==1){
    let aprenderFront = parseInt(prompt("Quieres aprender React(1) o Vue(2): "));
    validar(aprenderFront);
    area = "Front-End";
}else if (area ==2){
    let aprenderBack = parseInt(prompt("Quieres aprender C#(1) o Java(2): "));
    validar(aprenderBack)
    area= "Back-End";
}else{
    opcionValida();
    
}

let elegir = parseInt(prompt(`Quieres especializarte en ${area}(1) o quieres desarrollarte como Full Stack(2)?`))
if (elegir==1){
    alert(`Serás el más grande en ${area}` );
    elegir = area
} else if (elegir==2){
    alert("Tienes un gran camino para ser Full Stack");
    elegir = "Full Stack"
} else{
    opcionValida();
}


let cantidad = parseInt(prompt(`Para ser ${elegir}, ¿En cuántas tecnologías te quieres especializar(numeros): `));
contador = 0;
tecnologias = [];
validarTecnologias(cantidad);





function validar(numero){
    if ((numero <= 0) || (numero >2)){
        opcionValida();
    }
}

function validarTecnologias(numero){
    if (numero==0){
        alert(`Si te especializas en una tecnología, serás master en ${elegir}`);
    } else if (numero <0){
        opcionValida();
    } else if (numero >0){

        while (cantidad > contador){
            contador += 1;
            tecnologia = prompt(`Ingresa la tecnologia ${contador}`);
            tecnologias.push(tecnologia);
            
        } alert(`${(cantidad ===1) ? 'Tecnología':'Tecnologías'} a aprender ${(cantidad ===1) ? 'es':'son'}: ${tecnologias}`);
    }
}

function opcionValida(){
    alert("Elige una opción válida");
    throw new Error("ejecucion detenida por opción inválida");
}