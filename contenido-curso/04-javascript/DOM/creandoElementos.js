const agregarCaja = () => {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.textContent = 'Caja creada con JS'
    nuevoDiv.setAttribute('id', 'nuevo-id')
    nuevoDiv.classList.add('caja')

    const contenedor = document.getElementById('contenedor1')
    contenedor.appendChild(nuevoDiv)
}