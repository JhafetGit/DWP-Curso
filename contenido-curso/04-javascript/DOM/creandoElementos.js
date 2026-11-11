const agregarCaja = () => {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.textContent = 'Caja creada con JS'
    nuevoDiv.setAttribute('id', 'nuevo-id')
    nuevoDiv.classList.add('caja', 'activa')

    const contenedor = document.getElementById('contenedor1')
    // contenedor.appendChild(nuevoDiv)
    // contenedor.insertAdjacentElement('afterbegin', nuevoDiv)
    // contenedor.insertAdjacentElement('beforebegin', nuevoDiv)
    // contenedor.insertAdjacentElement('beforeend', nuevoDiv)
    // contenedor.insertAdjacentElement('afterend', nuevoDiv)


    document.querySelector('#contenedor1 .caja').replaceWith(nuevoDiv)
}