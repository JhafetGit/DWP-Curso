const arreglo = [1, 2, 3, 4, 5];
console.log("🚀 ~ arreglo:", arreglo.length)

arreglo.forEach(e => {
    console.log(e)
})

arreglo.push(8)
arreglo.push(9)

console.log("🚀 ~ arreglo:", arreglo.length)

const arregloSinPares = arreglo.filter(e => e % 2 != 0)
console.log("🚀 ~ arregloSinPares:", arregloSinPares)

