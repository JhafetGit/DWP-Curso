const colores = ['rojo', 'azul', 'rosa', 'verde', 'cafe']

// Obtener Tamaño Arreglo
console.log(colores.length)

// Convertir arreglo en strig
console.log("🚀 ~ colores.toString():", colores.toString())
// Separa elementos de arreglo por un caracter
console.log("🚀 ~ colores.join('- -'):", colores.join('- -'))
//Ordenar los elementos de un arreglo de forma ascendente
console.log("🚀 ~ colores.sort():", colores.sort())
// Ordena arreglo al reves
console.log("🚀 ~ colores.reverse():", colores.reverse())
const part1 = [1, 2, 3]
const part2 = ['a', 'b', 'c']
// Une dos arreglos
const part3 = part1.concat(part2)
console.log("🚀 ~ part1.concat():", part3)

// Agrega un elemento al final del arreglo
colores.push('Amarillo')
console.log("🚀 ~ colores.push('Amarillo'):", colores)
//eliminar el ultimo elemento
colores.pop()
console.log("🚀 ~ colores.pop():", colores)

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
// Elimina el primer elemento de un arreglo
dias.shift()
console.log("🚀 ~ dias.shift():", dias)
// Agrega un elemento al principio de un arreglo
dias.unshift('DiaRaro')
console.log("🚀 ~ dias.unshift('DiaRaro'):", dias)


const amigos = ['Alejandro', 'Cesar', 'Emanuel'];
console.log("🚀 ~ amigos:", amigos);
// Remplaza elementos dentro de un arreglo
amigos.splice(1, 2, 'reafael', 'Roborto');
console.log("🚀 ~ amigos:", amigos);


const frutas = ['uva', 'Fresa', 'Manzana', 'Piña', 'Mango'];
// Separa elementos dentro de un arreglo y crea uno nuevo con esos elementos
const frutasFavoritas = frutas.slice(1, 3);
console.log("🚀 ~ frutasFavoritas:", frutasFavoritas);

const nombre = ['Alejandro', 'Cesar', 'Emanuel', 'Carlos', 'Gema', 'Alejandro'];
//Devuelve el index de un elemento
console.log("🚀 ~ nombre.indexOf('Carlos'):", nombre.indexOf('Carlos'));
//Devuelve la ultima apararicion  de un elemento
console.log("🚀 ~ nombre.lastIndexOf('Alejandro'):", nombre.lastIndexOf('Alejandro'));

// Recorre cada elemento de un arreglo
nombre.forEach((e, i) => {
    console.log('Nombre en foreach', e + 'Index' + i)
})

// recore un arreglo y devolver el primer elemento

const nombreConLetra = nombre.find(e => e.startsWith('E'))
console.log("🚀 ~ nombreConLetra:", nombreConLetra)

// Creo un nuevo arreglo
const nuevoArreglo = nombre.map(e => e.toUpperCase())
console.log("🚀 ~ nuevoArreglo:", nuevoArreglo)
// Filtra elementos por alguna Condicion
const arregloSinElemnto = nombre.filter(e => !e.includes('C'))
console.log("🚀 ~ arregloSinElemnto:", arregloSinElemnto)
// ejecuta una funcion para todos los elementos de un arreglo
const nombreValidos = nombre.every((e) => { typeof e == 'string' ? true : false })
console.log("🚀 ~ nombreValidos:", nombreValidos)
