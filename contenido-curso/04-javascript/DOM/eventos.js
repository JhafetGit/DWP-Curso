const boton = document.querySelector('#boton1')
const boton2 = document.querySelector('#boton2')
const primeraCaja = document.querySelector('.caja')

const toggleClase = () => {
    primeraCaja.classList.toggle('activa')

}

boton.addEventListener('click', () => {
    primeraCaja.addEventListener('click', toggleClase)
})

boton2.addEventListener('click', () => {
    primeraCaja.removeEventListener('click', toggleClase)
})