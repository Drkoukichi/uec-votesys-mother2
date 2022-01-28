radio.onReceivedNumber(function (receivedNumber) {
    receive = receivedNumber
})
let receive = 0
radio.setGroup(80)
receive = 0
let qsum = 0
basic.showString("Hello!")
while (receive == 0) {
    basic.pause(5000)
}
basic.clearScreen()
qsum = receive
radio.setGroup(50)
while (receive != 100) {
    basic.showNumber(qsum)
    radio.sendNumber(qsum)
}
