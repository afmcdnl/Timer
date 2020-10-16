let start_time = 0
input.onButtonPressed(Button.A, function () {
    start_time = control.millis()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(control.millis() - start_time)
})
basic.forever(function () {
	
})
