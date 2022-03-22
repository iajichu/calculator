input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showString("" + (number_1))
})
input.onButtonPressed(Button.AB, function () {
    number_2 = number_1
    number_1 = 0
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    number_1 += -1
    basic.showString("" + (number_1))
})
input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(number_1 + number_2)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    number_2 = number_1
    number_1 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
let number_2 = 0
let number_1 = 0
number_1 = 0
basic.showString("" + (number_1))
