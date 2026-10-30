const usuario = {
    edad: 17,
    pais: 'Mexico',
    ticket: true
}

const boleto = 'vip'
let codigoAcceso;
// if (boleto === 'vip') {
//     codigoAcceso = 'VIP-UJUUUU'
// } else {
//     codigoAcceso = 'REGULAR-BUUUU'
// }

codigoAcceso = boleto === 'vip' ? 'VIP-UJUUUU' : 'REGULAR-BUUUUU'

console.log(codigoAcceso)


