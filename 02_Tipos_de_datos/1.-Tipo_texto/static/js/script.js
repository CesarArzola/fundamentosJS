console.log("conexión con js correcta...");
/*
Dato: Tipo texto(string)
1.- Concatenación de texto con el signo +
Podemos unir texto y variables
*/
//Concatenación: unir texto y/o variables.
const nombre = "César";
const apellido = "Arzola";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es " + nombre + " " + apellido);

/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre)

//Template literals (forma moderna para concatenar) ``
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - Contar los caracteres.
//.lenght --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras`);

//Crear una frase y contar sus caracteres.

let frase = "-Si no cambiás, nada cambia.-";
console.log(`La frase ${frase} tiene ${frase.length} letras`);

//Métodos comunes en JS para formatear texto.
//Trasnformar texto en Mayúsculas .toUpperCase()
let texto1 = "JaVaSCriPT eS LO meJoR"
console.log(texto1.toUpperCase());
//Transformar texto a minusculas .toLowerCase()
console.log(texto1.toLowerCase())
//Buscar un texto dentro de un string .incluides()
let texto2 = "Leche, Azucar, Pera Huevo, Harina"
console.log(texto2.includes("Pera")); //true

//Convertir una variable a texto.
let telefono = 38928902;
let telefono_texto = String(telefono);
console.log(`Mi número de teléfono: ${telefono_texto} es de tipo ${typeof telefono_texto}`);