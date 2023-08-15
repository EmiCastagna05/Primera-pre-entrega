function Suma(param1, param2) {
    return param1 + param2
}

function Resta(param1, param2) {
    return param1 - param2
}

function Multiplicacion(param1, param2) {
    return param1 * param2
}

function Division(param1, param2) {
    return param1 / param2
}

let num1 = 0
let num2 = 0
let vali = 0

do {
    let menu = parseInt(prompt('Seleccione una opcion.\n 1- Suma\n 2- Resta\n 3- Multiplicacion\n 4- Division\n 5- SALIR'))
    while (menu < 1 || menu > 5) {
        alert('La opcion seleccionada no existe. Seleccione una opcion existente')
        menu = parseInt(prompt('Seleccione una opcion.\n 1- Suma\n 2- Resta\n 3- Multiplicacion\n 4- Division\n 5- SALIR'))
    }

    if (menu == 1) {
        vali = 0

        num1 = parseFloat(prompt('SUMA\nIngrese el primer numero'))
        num2 = parseFloat(prompt('SUMA\nIngrese el segundo numero'))

        alert(num1 + ' + ' + num2 + ' = ' + Suma(num1, num2))
    }
    else if (menu == 2) {
        vali = 0
        
        num1 = parseFloat(prompt('RESTA\nIngrese el primer numero'))
        num2 = parseFloat(prompt('RESTA\nIngrese el segundo numero'))

        alert(num1 + ' - ' + num2 + ' = ' + Resta(num1, num2))
    }
    else if (menu == 3) {
        vali = 0
        
        num1 = parseFloat(prompt('MULTIPLICACION\nIngrese el primer numero'))
        num2 = parseFloat(prompt('MULTIPLICACION\nIngrese el segundo numero'))

        alert(num1 + ' * ' + num2 + ' = ' + Multiplicacion(num1, num2))
    }
    else if (menu == 4) {
        vali = 0
        
        num1 = parseFloat(prompt('DIVISION\nIngrese el primer numero'))
        num2 = parseFloat(prompt('DIVISION\nIngrese el segundo numero'))

        alert(num1 + ' / ' + num2 + ' = ' + Division(num1, num2))
    }
    else if (menu == 5) {
        vali = 1
    }
} while (vali != 1)

alert('FIN DEL PROGRAMA')