const usuario = {
    edad: 17,
    pais: 'Mexico',
    ticket: true
}


if (usuario.edad >= 18 && usuario.ticket) {
    console.log('Hola eres mayor de edad y tienes ticket')
} else {
    console.log('No puedes entrarr 😄😄😄😄😄😄 ')
}

if (usuario.edad >= 18) {
    if (usuario.ticket) {
        console.log("El usuario es mayor de edad y tiene ticket")
    } else {
        console.log('El usuario es mayor de edad y no tiene ticket')
    }
} else {
    console.log('El usuario no es mayor de edad')
}