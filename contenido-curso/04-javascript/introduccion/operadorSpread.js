const frutas = ['Manzana', 'Pera', 'Piña', 'Melon']
const comida = ['Pizza', 'Sushi', ...frutas]
console.log("🚀 ~ comida:", comida)

const datos = {
    nombre: 'Arturo',
    correo: 'correo.com',
    password: '123'
}

const usario = {
    nombre: 'Pablo',
    edad: 20,
    ...datos
}
console.log("🚀 ~ usario:", usario)


const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log("🚀 ~ registrarUsuario ~ nombre, correo, datosAdicionales :", nombre, correo, datosAdicionales)

}

registrarUsuario('Pablo', 'correo@correo.com', 28, 'España')


const { nombre, correo, edad } = usario
console.log("🚀 ~ nombre, correo :", nombre, correo)


const mostrarEdad = (nombre, edad) => {
    console.log("🚀 ~ mostrarEdad ~ nombre,edad:", nombre, edad)

}
mostrarEdad({ nombre, edad })