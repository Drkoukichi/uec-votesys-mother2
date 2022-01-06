let qsum=0

if(pins.digitalReadPin(DigitalPin.P10)==1){
    control.reset()
}

qsum = pins.i2cReadNumber(0, NumberFormat.Int8LE)

basic.showNumber(qsum)
