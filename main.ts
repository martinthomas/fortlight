input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
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
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(90)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})
