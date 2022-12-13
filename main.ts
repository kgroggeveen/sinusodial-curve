radio.onReceivedValue(function (name, value) {
    if ("x" == name) {
        serial.writeValue(name, Math.abs(value - 180))
    }
})
led.toggle(0, 0)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.compassHeading())
    basic.pause(10)
})
