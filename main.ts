hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.Three) < 30) {
        hummingbird.setLED(ThreePort.One, 100)
        basic.pause(500)
    } else {
        hummingbird.setRotationServo(FourPort.One, 0)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 30) {
        hummingbird.setLED(ThreePort.Two, 100)
        basic.pause(500)
        hummingbird.setLED(ThreePort.Two, 0)
    } else {
    	
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 30) {
        if (true) {
            hummingbird.setPositionServo(FourPort.One, 180)
            basic.pause(2000)
            hummingbird.setPositionServo(FourPort.One, 0)
            basic.pause(2000)
        }
    } else {
        hummingbird.setPositionServo(FourPort.One, 0)
    }
})
