let frutas =[];
let lacteos =[];
let congelados =[];
let dulces=[];

respuesta = true;

while (respuesta === true){
    let decision = prompt(`Desesas agregar${(frutas.length>0 || lacteos.length>0 || congelados.length>0 || dulces.length>0) ? '/eliminar':""} un árticulo a la lista : (si/no${(frutas.length>0 || lacteos.length>0 || congelados.length>0 || dulces.length>0) ? '/eliminar':""}) `);  
    if (decision === "no"){
        respuesta = false;
    }else if (decision === "si"){
        let articulo = prompt("Nombre de artículo a añadir: ");
        let lista = prompt("a qué lista lo deseas añadir (frutas,lacteos,congelados o dulces: ");
        añadirLista(lista,articulo);
    }else if (decision ==="eliminar"){
        eliminarLista();
    }
    else{
        alert("Eligue una opcion correcta");

    }
}
if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && dulces.length === 0){
    let h1 = document.createElement("h1");
    h1.innerText= "Lo siento, pero no  ingresaste ningun articulo para las listas";
    document.body.appendChild(h1);
}else{
    let h1_2 = document.createElement("h1");
    h1_2.innerText="Esta es tu lista de compras";
    document.body.appendChild(h1_2);
    creacionLi("Frutas",frutas);
    creacionLi("Lacteos",lacteos);
    creacionLi("Congelados",congelados);
    creacionLi("Dulces",dulces);
    
}

function añadirLista(lista,articulo){
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
}


function eliminarLista(){
    let objetoEliminar = prompt("Que objeto deseas eliminar? ");
    if (frutas.includes(objetoEliminar)){
        let indice = frutas.indexOf(objetoEliminar);
        frutas.splice(indice,1);
        alert(`El elemento con nombre ${objetoEliminar} se ha eliminado`);
        alert(`Contenido de la  lista de frutas: ${frutas}`);
    }else if (congelados.includes(objetoEliminar) ){
        let indice = congelados.indexOf(objetoEliminar);
        congelados.splice(indice,1);
        alert(`El elemento con nombre ${objetoEliminar} se ha eliminado`);
        alert(`Contenido de la  lista de congelados: ${congelados}`);

    }else if (lacteos.includes(objetoEliminar)){
        let indice = lacteos.indexOf(objetoEliminar);
        lacteos.splice(indice,1);
        alert(`El elemento con nombre ${objetoEliminar} se ha eliminado`);
        alert(`Contenido de la  lista de lacteos: ${lacteos}`);

    }else if (dulces.includes(objetoEliminar)){
        let indice = dulces.indexOf(objetoEliminar);
        dulces.splice(indice,1);
        alert(`El elemento con nombre ${objetoEliminar} se ha eliminado`);
        alert(`Contenido de la  lista de dulces: ${dulces}`);

    }else{
        alert(`El elemento con nombre ${objetoEliminar} no se ha encontrado en alguna lista`);
        
    }
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
