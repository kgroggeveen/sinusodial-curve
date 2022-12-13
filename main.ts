radio.onReceivedValue(function (name, value) {
    if ("x" == name) {
        serial.writeValue(name, value)
    }
})
led.toggle(0, 0)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    basic.pause(10)
})
