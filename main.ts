let 方位 = 0
input.onButtonPressed(Button.A, function () {
    方位 = input.compassHeading()
    basic.showNumber(方位)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    方位 = input.compassHeading()
    if (方位 <= 20 || 方位 >= 340) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    } else if (方位 >= 70 && 方位 <= 110) {
        basic.showString("E")
    } else if (方位 >= 160 && 方位 <= 200) {
        basic.showString("S")
    } else if (方位 >= 250 && 方位 <= 290) {
        basic.showString("W")
    } else {
        basic.showIcon(IconNames.No)
    }
})
