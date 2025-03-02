let frutas =[];
let lacteos =[];
let congelados =[];
let dulces=[];

respuesta = true;

while (respuesta === true){
    let decision = prompt("Desesas agregar un árticulo a la lista: (si/no) ");

    if (decision === "no"){
        respuesta = false;
    }else if (decision === "si"){
        let articulo = prompt("Nombre de artículo a añadir: ");
        let lista = prompt("a qué lista lo deseas añadir (frutas,lacteos,congelados o dulces: ");
        
        if (lista === "frutas"){
            frutas.push(articulo)
        }else if (lista ==="lacteos"){
            lacteos.push(articulo);
        }else if (lista === "congelados"){
            congelados.push(articulo);
        }else if (lista ==="dulces"){
            dulces.push(articulo);
        }else{
            alert("Nombre de lista no existe");
        }
    }else{
        alert("Eligue una opcion correcta");

    }
}
if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && dulces.length === 0){
    let h1 = document.createElement("h1");
    h1.innerText= "Lo siento, pero no  ingresaste ningun articulo para las listas";
    document.body.appendChild(h1);
}else{
    creacionLi("Frutas",frutas);
    creacionLi("Lacteos",lacteos);
    creacionLi("Congelados",congelados);
    creacionLi("Dulces",dulces);
}


function creacionLi(nombre,lista){
    let addLi = document.createElement("ul");
    let titulo = document.createElement("strong");
    titulo.innerText = `${nombre}`;
    document.body.appendChild(titulo);

    if (lista.length ===0){
        let li = document.createElement("li");
        li.innerText = "Lista Vacia";
        addLi.appendChild(li);
    }else {
        lista.forEach(element => {
            let li = document.createElement("li");
            li.innerText = element;
            addLi.appendChild(li);
            
    })};

    document.body.appendChild(addLi);
}
