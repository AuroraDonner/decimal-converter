input.onButtonPressed(Button.A, function () {
    led.toggle(light2 % 5, light2 / 5)
})
function blink () {
    for (let index = 0; index < 2; index++) {
        led.plotBrightness(light2 % 5, light2 / 5, 128)
        basic.pause(100)
        led.unplot(light2 % 5, light2 / 5)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 24; index++) {
        if (led.point(index % 5, index / 5)) {
            decimal += value
        }
        value = value / 2
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(decimal)
})
input.onButtonPressed(Button.B, function () {
    light2 += -1
    blink()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    reset()
})
function reset () {
    value = 16777216
    decimal = 0
    light2 = 24
    blink()
}
let value = 0
let decimal = 0
let light2 = 0
reset()
