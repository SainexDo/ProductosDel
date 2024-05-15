let nombre = document.getElementById('nombre')
let cantidad = document.getElementById('cantidad')
let precio = document.getElementById('precio')
let agregar = document.getElementById('agregar')


let datosProducto = JSON.parse(localStorage.getItem('datosProducto')) || [];

console.log(nombre, cantidad, precio);


agregar.addEventListener('click', function () {

let datosVistos = {

    nombre: nombre.value,
    cantidad: cantidad.value,
    precio: precio.value,

}

datosProducto.push(datosVistos);

console.log(datosProducto);
console.log(datosVistos);

    localStorage.setItem('datosProducto', JSON.stringify(datosProducto));

})