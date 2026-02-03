//SOLICITAR AL USUARIOS LOS NUMEROS.

let numero1 = Number(prompt("Ingrese un valor"));
let numero2 = Number(prompt("Ingrese un segundo valor"));

console.log("Los numeros ingresados son: ", numero1, ",", numero2);

//OBJETO

let calculadora = {
    numero1,
    numero2,
    resultados: {},

    //METODO DEL OBJETO CALCULADORA

    mostrarResultados() {
        console.log("Los resultados son: ", this.resultados);
    }
}

//FUNCION FLECHA CON VALIDACIÓN DE LOS NUMEROS INGRESADOS CON UN IF Y SWITCH

const validar = (numero1, numero2) => {
    if (isNaN(numero1) || isNaN(numero2)) {

        let mensaje = "No se puede realizar la operación porque: \n";

        switch (true) {

            case isNaN(numero1) && isNaN(numero2):
                mensaje += "- Los dos valores ingresados no son número. \n";
                break;

            case isNaN(numero1):
                mensaje += "- El primer número que ingreso no es correcto. \n";
                break;

            case isNaN(numero2):
                mensaje += "- El segundo número que ingreso no es correcto. \n";
                break;
        }

        console.log(mensaje);
        alert(mensaje);

        return false;
    }
    return true;
}

//FUNCIONES DE OPERACIONES ARITMETICAS BASICAS

const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;


//FUNCION FLECHA PARA EJECUTAR LAS OPERACIONES ARITMETICAS

const calculosResueltos = () => {

    //ARREGLO PARA DEFINIR LAS OPERACIONES ARITMETICAS

    const operacionesAritmeticas = [
        { nombre: "Suma", function: sumar },
        { nombre: "Resta", function: restar },
        { nombre: "Multiplicacion", function: multiplicar },
        { nombre: "Division", function: dividir }
    ];

    //RECORRER EL ARREGLO 

    operacionesAritmeticas.forEach(operacion => {
        const resultado = operacion.function(calculadora.numero1, calculadora.numero2);

        calculadora.resultados[operacion.nombre] = resultado;

        console.log(`La ${operacion.nombre} es: `, resultado);
    });

    calculadora.mostrarResultados();
}

//FUNCION PARA FILTRAR LOS NUMEROS POSITIVOS

const filtrarResultadosPositivos = () => {
    return Object.keys(calculadora.resultados)
           .map(clave => [clave, calculadora.resultados[clave]])
           .filter(([_, valor]) => valor > 0);
}

if (validar(numero1, numero2)) {
    calculosResueltos();
    const resultadosPositivos = filtrarResultadosPositivos();
    console.log("Los resultados positivos son: ", resultadosPositivos);
}








