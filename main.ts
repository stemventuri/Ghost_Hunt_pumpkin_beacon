function main_radio_broadcast () {
    radio.sendNumber(0)
    basic.pause(1000)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
})
function setup_radio () {
    radio.setGroup(1)
    radio.setTransmitPower(1)
    radio.setTransmitSerialNumber(true)
}
setup_radio()
basic.showString("P")
basic.forever(function () {
    main_radio_broadcast()
})
