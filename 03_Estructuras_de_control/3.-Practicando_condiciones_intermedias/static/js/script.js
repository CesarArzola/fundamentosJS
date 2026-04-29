console.log("Conexion exitosa con js")
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nombre = "Juan";
    let nota = 6.5;
    if (nota >= 6.0) {
        alert(`El estudiante ${nombre} tine una nota ${nota} y su resultado es: Excelente rendimiento`);
    } else if (nota >= 4.0) {
        alert(`El estudiante ${nombre} tiene una nota ${nota} y su resultado es: Estudiante aprobado`);
    } else{
        alert(`El estudiante ${nombre} tiene una nota ${nota} y su resultado es: Estudiante reprobado`);
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombreCompleto = "Daniel Perez";
alert(`El nombre convertido es: ${nombreCompleto.toLowerCase()} y tiene ${nombreCompleto.length} caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "eJEmPLo@gMAil.cOM";
let corregido = correo.toLowerCase();
if(corregido.length > 15){
    alert(`El correo convertido es: ${correo} y el resultado es: ${corregido}\nValido la cantidad de caracteres: ${corregido.length}`)
} else{
    alert(`El correo convertido es: ${correo} y el resultado es: ${corregido}\nInvalido la cantidad de caracteres: ${corregido.length}`)
}
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {

}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {

}