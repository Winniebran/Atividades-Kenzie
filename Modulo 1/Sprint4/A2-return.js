//Exercício 1

function soma(valor1, valor2, valor3, valor4) {
    return valor1 + valor2 + valor3 + valor4
}

function media(value) {
    return value / 4
}

function resultado(valor1, valor2, valor3, valor4) {
    return media(soma(valor1, valor2, valor3, valor4))
}

console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))

//Exercício 2

function fahrenheit(currentType, currentValue) {
    if (currentType == 'Celsius') {
        return currentValue * 1, 8 + 32
    }
    else if (currentType == 'Kelvin') {
        return (currentValue - 273) * 1, 8 + 32
    }
    else {
        return "Digite um tipo diferente do atual para ser convertido"
    }
}

function celsius(currentType, currentValue) {
    if (currentType == 'Fahrenheit') {
        return (currentValue - 32) / 1, 8
    }
    else if (currentType == 'Kelvin') {
        return currentValue - 273
    }
    else {
        return "Digite um tipo diferente do atual para ser convertido"
    }

}

function kelvin(currentType, currentValue) {
    if (currentType == 'Fahrenheit') {
        return (currentValue - 32) * 5 / 9 + 273
    }
    else if (currentType == 'Celsius') {
        return currentValue + 273
    }
    else {
        return "Digite um tipo diferente do atual para ser convertido"
    }
}

function convert(currentType, currentValue, newType) {
    if (currentType == 'Fahrenheit') {
        return fahrenheit(newType, currentValue)
    } else if (currentType == 'Celsius') {
        return celsius(newType, currentValue)
    } else if (currentType == 'Kelvin') {
        return kelvin(newType, currentValue)
    }
}

console.log(convert('Fahrenheit', 10, 'Kelvin'))
