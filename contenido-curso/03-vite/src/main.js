import imagen from '../assets/canon.png'
import cargarContador from './contador'
import './style.css'
import clases from './imagen.module.css'

document.getElementById('app').innerHTML = `
<h1>Hola Mundo</h1>
<img src="${imagen}" id="imagen" class="${clases.imagen}" />
<h2>Veces Clickeado: <span id="cuenta">0</span> </h2>

`

cargarContador()