const contenedor = document.getElementById('contenedor1')
console.log("🚀 ~ contenedor:", contenedor)
console.log("🚀 ~ contenedor:", contenedor.children)
console.log("🚀 ~ contenedor:", contenedor.parentElement)


const divs = document.getElementsByTagName('div')
console.log("🚀 ~ divs:", divs)


const caja = document.querySelector('#contenedor2')
console.log("🚀 ~ caja:", caja)

const cajas = document.querySelectorAll('#contenedor1 .caja')
console.log("🚀 ~ cajas:", cajas)


const ultimaCaja = document.querySelector('.caja:last-child')
console.log("🚀 ~ ultimaCaja:", ultimaCaja)
console.log("🚀 ~ ultimaCaja:", ultimaCaja.closest('.contenedor-principal'))

