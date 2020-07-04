input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    white = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . # . .
        # # . # #
        . # . # .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(500)
    strip.setBrightness(90)
    strip.showRainbow(1, 360)
    white = 0
})
let white = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(90)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
white = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (white == 0) {
        strip.rotate(1)
        strip.show()
    }
    basic.pause(25)
})
