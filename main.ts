/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program turns on neopixels based 
 * on the number displayed
*/

// variables
let loopCounter: number = 4
let xandersNeopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.show()
basic.showIcon(IconNames.Happy)

// turn on all the lights
input.onButtonPressed(Button.A, function() {
    while (loopCounter > 0) {

        if (loopCounter == 4) {
            xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

        if (loopCounter == 3) {
            xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            xandersNeopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

        if (loopCounter == 2) {
            xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            xandersNeopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

        if (loopCounter == 1) {
            xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            xandersNeopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }
        
    } if (loopCounter == 0) {
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        xandersNeopixelStrip.show()
        basic.showNumber(loopCounter)
    }
})
