const nombre = 'Carlos'
const edad = 17;
const tieneEntrada = true
const tienePermiso = true
const permitirAcceso = (edad >= 18 && tieneEntrada) || tienePermiso;
console.log("🚀 ~ permitirAcceso:", permitirAcceso)


