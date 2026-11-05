const nombres = ['Carlos', 'Alberto', 'Christian', 'Estefania', 'Erika', 'Manuel']

for (let i = 0; i < nombres.length; i++) {
    console.log("🚀 ~ nombres[i]:", nombres[i])
    if (nombres[i].startsWith('A')) {
        break;
    }
}
const invitados = ['Carlos', 'Alberto', 'Christian', 'Jorge', 'Estefania', 'Erika', 'Manuel']

for (let i = 0; i < invitados.length; i++) {
    if (invitados[i] == 'Jorge') {

        continue;
    }
    console.log('Invitados; \n ')
    console.log(invitados[i])
}