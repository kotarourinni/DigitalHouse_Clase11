//Crear un array de números y asignarle un total de diez (10) valores numéricos.
let numeros = [11, 50, 25, 49, 78, 85, 1, 2, 65, 33];
/*Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array.*/
let [valor0, , valor2, , valor4, ...restoDeNumeros ] = numeros;
//Crear un objeto literal para almacenar los datos de nuestra mascota
let mascota = {
    nombre: 'Carboncito',
    tipo: 'Conejo',
    color: ['Gris','Negro'],
    raza: 'Jersey Wooly'
}

/*Haciendo uso de la desestructuración, crea una variable por cada una de las
claves del objeto literal.*/
let { nombre: nombreMascota, tipo, color, raza} = mascota;

/*mostrar texto al usuario*/
console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombreMascota}, es un ${tipo} de color ${color[0]} y ${color[1]}. Su raza es: ${raza}.`);
