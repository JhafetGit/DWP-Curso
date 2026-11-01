const colores = ['rojo', 'azul', 'rosa', 'verde', 'cafe']

console.log(colores.length)

console.log("🚀 ~ colores.toString():", colores.toString())
console.log("🚀 ~ colores.join('- -'):", colores.join('- -'))
console.log("🚀 ~ colores.sort():", colores.sort())
console.log("🚀 ~ colores.sort():", colores.sort())
// Ordena arreglo al reves
console.log("🚀 ~ colores.reverse():", colores.reverse())
const part1 = [1, 2, 3]
const part2 = ['a', 'b', 'c']
const part3 = part1.concat(part2)
console.log("🚀 ~ part1.concat():", part3)

colores.push('Amarillo')
console.log("🚀 ~ colores.push('Amarillo'):", colores)
//eliminar el ultimo elemento
colores.pop()
console.log("🚀 ~ colores.pop():", colores)

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
dias.shift()

console.log("🚀 ~ dias.shift():", dias)

dias.unshift('DiaRaro')
console.log("🚀 ~ dias.unshift('DiaRaro'):", dias)



const amigos = ['Alejandro', 'Cesar', 'Emanuel'];
console.log("🚀 ~ amigos:", amigos);

amigos.splice(1, 2, 'reafael', 'Roborto');
console.log("🚀 ~ amigos:", amigos);


const frutas = ['uva', 'Fresa', 'Manzana', 'Piña', 'Mango'];
const frutasFavoritas = frutas.slice(1, 3);
console.log("🚀 ~ frutasFavoritas:", frutasFavoritas);

const nombre = ['Alejandro', 'Cesar', 'Emanuel', 'Carlos', 'Gema', 'Alejandro'];
console.log("🚀 ~ nombre.indexOf('Carlos'):", nombre.indexOf('Carlos'));
console.log("🚀 ~ nombre.lastIndexOf('Alejandro'):", nombre.lastIndexOf('Alejandro'));


nombre.forEach(e => {
    console.log('Nombre en foreach', e)
})
