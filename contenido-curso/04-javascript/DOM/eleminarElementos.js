const eleminarCaja = () => {
    const contenedor = document.querySelector('#contenedor1')
    const cajaEliminar = contenedor.querySelector('.caja')
    if (cajaEliminar) {
        contenedor.removeChild(cajaEliminar)
    }

    // contenedor.removeChild(contenedor.firstChild)
}