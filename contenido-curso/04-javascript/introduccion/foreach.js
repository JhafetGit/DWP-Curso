const nombres = ['Carlos', 'Christian', 'Estefania', 'Erika', 'Manuel']
console.log('Nombres desde forEach')
nombres.forEach(nombre => {
    console.log("🚀 ~ nombre:", nombre)

});
const persona = {
    nombre: "Jhaf",
    apellido: 'Martinez',
    edad: 22,
    correo: 'correo@correo.com'
}

console.log('Propiedaes desde for in')
for (p in persona) {
    console.log("🚀 ~ persona[p]:", persona[p])
    console.log(p)
}

for (const nombre of nombres) {
    console.log("🚀 ~ nombre:", nombre)

}
