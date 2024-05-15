let datosProducto = JSON.parse(localStorage.getItem('datosProducto')) || [];
let padre = document.getElementById('padre');



for (let index = 0; index < datosProducto.length; index++) {

let div = document.createElement('div')
let button = document.createElement('button')

div.innerHTML = "Nombre:" + ' ' + datosProducto[index].nombre + ' ' + "Cantidad:" + ' ' + datosProducto[index].cantidad + ' ' + "Precio:" + ' ' + datosProducto[index].precio

button.innerHTML = "Eliminar"

padre.appendChild(div)
padre.appendChild(button)

div.id = 'franco'

button.addEventListener('click', function () {
    padre.removeChild(div)
    padre.removeChild(button)
    datosProducto.filter()
})
}

