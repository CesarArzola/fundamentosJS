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
    } else {
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
    if (corregido.length > 15) {
        alert(`El correo convertido es: ${correo} y el resultado es: ${corregido}\nValido la cantidad de caracteres: ${corregido.length}`)
    } else {
        alert(`El correo convertido es: ${correo} y el resultado es: ${corregido}\nInvalido la cantidad de caracteres: ${corregido.length}`)
    }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    if (frase.length >= 20) {
        alert(`La frase "${frase}" tiene ${frase.lenght} caracteres y corresponde a una frase larga`);
    } else if (frase.length >= 11) {
        alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase mediana`);
    } else {
        alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase corta`);
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precio = 50000;
    let descuento = 0.1;
    alert(`El producto ${producto.toUpperCase()}
    \ntiene un precio final de $${precio - (precio * descuento)}`);
}

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

function ejercicio16() {
    let cliente = "Tilin";
    let producto = "Televisión";
    let precio = 149990;
    let descuentoP = 0.2;
    let descuentoF = 0.1;
    if (precio >= 100000) {
        alert(`el cliente ${cliente.toUpperCase()} compro una ${producto} por un precio original de: ${precio}
    \nsu precio con descuento es: ${precio - (precio * descuentoP)} porque ${cliente} es un cliente premium`);
    } else if (precio >= 50000) {
        alert(`el cliente ${cliente.toUpperCase()} compro una ${producto} por un precio original de: ${precio}
    \nsu precio con descuento es: ${precio - (precio * descuentoF)} porque ${cliente} es un cliente frecuente`);
    } else {
        alert(`el cliente ${cliente.toUpperCase()} compro una ${producto} por un precio original de: ${precio}
    \nNo tiene descuento por lo que queda en ${precio} porque ${cliente} es un cliente normal`);
    }
}


// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

function ejercicio17() {
    let frase = "Me enAMoré de tUs PAlaBras y dE TuS aCTos, de pEnSARte, de eXTRAñarTE, De SeNtiR tU tAcTO";
    let puntaje = 100;
    let fraseMinusc = frase.toLowerCase();
    if (puntaje >= 90) {
        alert(`La frase "${fraseMinusc}" tiene ${frase.length} caracteres
        \nY tiene un puntaje de ${puntaje}, por lo que es excelente.`);
    } else if (puntaje >= 70) {
        alert(`La frase "${fraseMinusc}" tiene ${frase.length} caracteres
        \nY tiene un puntaje de ${puntaje}, por lo que es buena.`);
    } else {
        alert(`La frase "${fraseMinusc}" tiene ${frase.length} caracteres
        \nY tiene un puntaje de ${puntaje}, por lo que es Insuficiente.`);
    }
}

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación




// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

function ejercicio18() {
    let nombre = "Papelucho";
    let n1 = 2.9;
    let n2 = 7;
    let n3 = 6.7;
    let promedio = (n1 + n2 + n3) / 3;
    let nombreMayusculas = nombre.toUpperCase();
    if (promedio >= 6) {
        alert(`El estudiante ${nombreMayusculas} es un estudiante destacado.
        \nYa que tiene un promedio ${promedio}.
        \nEl largo de su nombre es de ${nombre.length} caracteres.`);
    } else if (promedio >= 4) {
        alert(`El estudiante ${nombreMayusculas} es un estudiante aprobado.
        \nYa que tiene un promedio ${promedio}.
        \nEl largo de su nombre es de ${nombre.length} caracteres.`);
    } else {
        alert(`El estudiante ${nombreMayusculas} ha sido reprobado.
        \nYa que tiene un promedio ${promedio}.
        \nEl largo de su nombre es de ${nombre.length} caracteres.`);
    }
}
// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

function ejercicio19() {
    let nombre = "Miguelito";
    let n1 = 6.7;
    let n2 = 6.5;
    let n3 = 4.7;
    let n4 = 5.2;
    let n5 = 6.1;
    let promedio = (n1 + n2 + n3 + n4 + n5) / 5;
    let nombreMayusc = nombre.toUpperCase();
    if (promedio >= 6.5) {
        alert(`El estudiante ${nombreMayusc} es sobresaliente
        \nTiene un promedio de ${promedio}
        \nSu nombre tiene ${nombre.length} caracteres.`);
    } else if (promedio >= 6) {
        alert(`El estudiante ${nombreMayusc} tiene muy buen rendimiento
        \nTiene un promedio de ${promedio}
        \nSu nombre tiene ${nombre.length} caracteres.`);
    } else if (promedio >= 5) {
        alert(`El estudiante ${nombreMayusc} tiene buen rendimiento
        \nTiene un promedio de ${promedio}
        \nSu nombre tiene ${nombre.length} caracteres.`);
    } else if (promedio >= 4) {
        alert(`El estudiante ${nombreMayusc} tiene un rendimiento suficiente
        \nTiene un promedio de ${promedio}
        \nSu nombre tiene ${nombre.length} caracteres.`);
    } else {
        alert(`El estudiante ${nombreMayusc} tiene un rendimiento insuficiente
        \nTiene un promedio de ${promedio}
        \nSu nombre tiene ${nombre.length} caraceteres.`);
    }
}

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre


// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

function ejercicio20() {
    let producto = "PaLTa";
    let precio = 3990;
    let productoMinusc = producto.toLowerCase;
    let descuento1 = 0.15;
    let descuento2 = 0.1;
    if (precio >= 200000) {
        alert(`El producto ${productoMinusc} tiene ${producto.length} caracteres
        \nTiene un precio de: $${precio}
        \nCon descuento su precio final es: $${precio - (precio * descuento1)}
        \nEl descuento es de 15% ya que es un producto de lujo.`);
    } else if (precio >= 100000) {
        alert(`El producto ${productoMinusc} tiene ${producto.length} caracteres
        \nTiene un precio de: $${precio}
        \nCon descuento su precio final es: $${precio - (precio * descuento1)}
        \nEl descuento es de 15% ya que es un producto premium.`);
    } else if (precio >= 50000) {
        alert(`El producto ${productoMinusc} tiene ${producto.length} caracteres
        \nTiene un precio de: $${precio}
        \nCon descuento su precio final es: $${precio - (precio * descuento2)}
        \nEl descuento es de 10% ya que es un producto de estandar.`);
    } else if (precio >= 20000) {
        alert(`El producto ${productoMinusc} tiene ${producto.length} caracteres
        \nTiene un precio de: $${precio}
        \nEste producto no tiene descuento ya que cuesta menos de $50000
        \nEs un producto economico.`);
    } else {
        alert(`El producto ${productoMinusc} tiene ${producto.length} caracteres
        \nTiene un precio de: $${precio}
        \nNo tiene descuento ya que cuesta menos de $50000
        \nEste es un producto basico.`);
    }
}

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

function ejercicio21() {
    let frase = "Existe tiempo suficiente para aprender diversas cosas. También hay tiempo para cometer errores.";
    let puntaje = 100
    if (puntaje >= 90) {
        alert(`La frase "${frase.toUpperCase()}"
            \ntiene un largo de ${frase.length} caracteres
            \ny un puntaje de ${puntaje} puntos, por lo que es excelente.`);
    } else if (puntaje >= 80) {
        alert(`La frase "${frase.toUpperCase()}"
            \ntiene un largo de ${frase.length} caracteres
            \ny un puntaje de ${puntaje} puntos, por lo que es muy buena.`);
    } else if (puntaje >= 70) {
        alert(`La frase "${frase.toUpperCase()}"
            \ntiene un largo de ${frase.length} caracteres
            \ny un puntaje de ${puntaje} puntos, por lo que es buena.`);
    } else if (puntaje >= 60) {
        alert(`La frase "${frase.toUpperCase()}"
            \ntiene un largo de ${frase.length} caracteres
            \ny un puntaje de ${puntaje} puntos, por lo que es una frase regular.`);
    } else {
        alert(`La frase "${frase.toUpperCase()}"
            \ntiene un largo de ${frase.length} caracteres
            \ny un puntaje de ${puntaje} puntos, por lo que es una frase deficiente.`);
    }
}

// Además:

// Clasificar la frase por tamaño:
// 30 → Muy larga
// 20 → Larga
// 10 → Mediana
// ≤ 10 → Corta