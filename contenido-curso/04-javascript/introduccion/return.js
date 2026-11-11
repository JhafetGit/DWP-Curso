const operacion = (tipo, num, num2) => {
    if (tipo === 'suma')
        return num + num2
    if (tipo === 'resta')
        return num - num2
}

let res = operacion('suma', 100, 200)
console.log("🚀 ~ res:", res)
res = operacion('resta', 100, 200)
console.log("🚀 ~ res:", res)

