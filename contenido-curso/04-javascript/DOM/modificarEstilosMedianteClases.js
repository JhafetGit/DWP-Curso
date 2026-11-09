const primertaCaja = document.querySelector('#contenedor1 .caja')
const agregarClase = () => {

    primertaCaja.classList.add('activa')
}

const eleminarClase = () => {
    primertaCaja.classList.remove('activa')

}

const toogleClase = () => {
    primertaCaja.classList.toggle('activa')
}

const comprobarClase = () => {

    if (primertaCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase activa')
    } else {
        console.log('La caja no tiene la clase activa')
    }

    console.log('Y contiene las siguientes clases: ')
    primertaCaja.classList.forEach(clase => console.log(clase))

}