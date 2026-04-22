console.log("Conexión exitosa con JS...")
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenía: ${edad - 10}`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function CompraDescuento(){
    let producto = 25000
    let descuento = 20
    alert(`El producto con su descuento, tiene un valor de: ${producto - ((producto * descuento) / 100)}`);
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
    let nota1 = 5.5;
    let nota2 = 6.7;
    let nota3 = 4.8;
    let promedio = Math.round(nota1 + nota2 + nota3 / 3)
    alert(`El resultado de los promedios es: ${nota1 + nota2 + nota3 / 3}
        \nRedondeado es: ${promedio}`);
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function temperatura(){
    let temperatura = 25;
    alert(`La temperatura actual es de ${(temperatura + 3) - 5} grados Celsius`);
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function sueldoSemanal(){
    let valorHora = 8000;
    let cantidadHora = 45;
    let sueldo = valorHora * cantidadHora;
    cantidadHora += 5; // += para incrementar o acumular
    let sueldoNuevo = valorHora * cantidadHora;
    alert(`Sueldo actual: $${sueldo}
        \nSueldo nuevo con incremento: $${sueldoNuevo} `);
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function divisionResto(){
    let numero1 = 24;
    let numero2 = 9;
    alert(`El restultado de ${numero1} / ${numero2} es: ${numero1 / numero2}
        \nY usando "%" para ver lo que sobro de la división, el resultado es: ${numero1 % numero2}`);
};

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparacionNumeros(){
    let numero1 = 19;
    let numero2 = 12;
    alert(`¿El número ${numero1} es mayor que ${numero2}? ${numero1 > numero2}
        \n¿Y el número ${numero1} es igual a 10? ${numero1 === 10}`);
};

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacionCientifica(){
    let poblacion = 2e6;
    let poblacionDiv = 4;
    alert(`El resultado de la población (${poblacion})
    \ndividido en 4 grupos es de: ${poblacion / poblacionDiv} por grupo`);
};

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculo(){
    let numero1 = 3;
    let numero2 = 4;
    let potencia = 3 ** 4;
    alert(`El resultado de ${numero1} elevado a ${numero2} es de: ${potencia}
        \nSi el resultado lo multiplicamos por 2 nos da como resultado: ${potencia * 2}
        \nY si a eso le restamos 10 nos da: ${(potencia * 2) - 10}`);
};

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoAleatorio(){
    let dado = Math.floor(Math.random() * 6) + 1;
    alert(`Dado: ¡${dado}! ¿${dado} >= 4? ${dado < 4, dado >= 4}`);
};