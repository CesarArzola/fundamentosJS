console.log("Conexión exitosa con JS...");

/* 
==============================
1. ¿Qué es una condición JS?
==============================
Una condición nos permite tomar decisiones en el código.
Separando dos caminos, el si (if) y el no (else).

Estructura básica:( Sintáxis --> Reglas del Lenguaje de programación).

if (condición) {
    //Código que se ejecuta si la condición es verdadera.
}

else {
    //Código que se ejecuta si la condición es falsa
}
*/

//Ejemplo 1: (numérico) -- IF
let edad = 18;

if (edad == 18) { //Condición Si
    console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;
if (temperatura > 20) { //Condición Si
    console.log("Hace calor");
} else { //Condición No
    console.log("Hace frío");
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0) {
    console.log("Excelente! sigue así!");
} else if (nota >= 5.0) {
    console.log("Aprobado, puedes mejorar!");
} else {
    console.log("Reprobado, estudia más!");
}

//Ejemplo 4: Condiciones con STRING
let nombre = "César";

//Comparación exacta (===)
if (nombre === "César") {
    console.log("Hola, " + nombre);
} else {
    console.log("Tú no eres César");
}

/* 
OPERADORES DE COMPARACIÓN

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/

//Ejemplo de distinto
let num = 10;
let num2 = 10;
if (num !== num2) { //Comparación con distinto
    console.log(`El número: ${num} es distinto que ${num2}`)
} else {
    console.log("Son iguales!")
}