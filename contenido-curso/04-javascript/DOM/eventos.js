const boton = document.querySelector('#boton1')
const primeraCaja = document.querySelector('.caja')

boton.addEventListener('click', (e) => {
    e.preventDefault()
    primeraCaja.classList.toggle('activa');
})