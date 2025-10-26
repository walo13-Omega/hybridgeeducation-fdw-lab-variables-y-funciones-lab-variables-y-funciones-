// Ejercicio 1: Declaración de Función
// Modifica la siguiente función creando una nueva variable llamada nombre y asignándole tu nombre. La función debe retornar esta nueva variable que contiene tu nombre

function obtenerNombre() {
    // Escribe tu código aquí
    const nombre = "Braulio Beltran";
    return nombre;
}

// No modificar.
// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = {
    obtenerNombre
};

// Ejemplo de uso:
console.log(obtenerNombre());
