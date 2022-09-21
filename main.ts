input.onButtonPressed(Button.A, function () {
    basic.showNumber(minima)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Temperatura_Actual)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maxima)
    basic.pause(1000)
})
let maxima = 0
let minima = 0
let Temperatura_Actual = 0
Temperatura_Actual = input.temperature()
minima = Temperatura_Actual
maxima = Temperatura_Actual
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    Temperatura_Actual = input.temperature()
    if (Temperatura_Actual < minima) {
        minima = Temperatura_Actual
    }
    if (Temperatura_Actual > maxima) {
        maxima = Temperatura_Actual
    }
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
