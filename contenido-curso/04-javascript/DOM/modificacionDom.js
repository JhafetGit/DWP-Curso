const primeraCaja = document.querySelector('.caja')
primeraCaja.innerHTML = 'Hola Desde js'

primeraCaja.id = 'nuvo-id'

primeraCaja.setAttribute('class', 'caja activa')
primeraCaja.setAttribute('data-id', '123-908')


const contenedor2Caja1 = document.querySelector('#contenedor2 .caja')
contenedor2Caja1.style.background = 'red'
contenedor2Caja1.style.textTransform = 'uppercase'