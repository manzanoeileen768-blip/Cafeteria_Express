const lista = document.getElementById("listaPedidos");

let pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];

mostrarPedidos();

function agregarPedido(producto){
    pedidos.push(producto);

    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
    );

    mostrarPedidos();
}

function mostrarPedidos(){
    lista.innerHTML="";

    pedidos.forEach(item =>{
        let li=document.createElement("li");
        li.textContent=item;
        lista.appendChild(li);
    });
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
}