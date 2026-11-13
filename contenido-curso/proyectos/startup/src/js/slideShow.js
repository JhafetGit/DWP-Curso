const slideshow = document.querySelector("#slideshow")
const slides = document.querySelector("#slides")
const indicadores = document.querySelector("#indicadores")
const cambiarBtn = document.querySelector("#cambiar")
let slideActual = 0;

const siguienteSlide = () => {
    const primerSlide = slides.children[0]
    const ancho = primerSlide.offsetWidth;
    slides.style.transition = `ease-out 200ms all`
    slides.style.transform = `translateX(-${ancho}px)`
    setTimeout(() => {
        slides.style.transition = `none`
        slides.appendChild(primerSlide)
        slides.style.transform = `translateX(0)`

    }, 200);

    if (slideActual < slides.children.length) {
        slideActual++
    } else {
        slideActual = 0;
    }
    indicadores.querySelector('.active').classList.remove('active')
    indicadores.children[slideActual].classList.add('active')


}

setInterval(() => {
    siguienteSlide()
}, 5000);


