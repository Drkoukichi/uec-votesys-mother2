let qsum=0

while(pins.digitalReadPin(DigitalPin.P10)==1){
    
}

qsum = pins.i2cReadNumber(0, NumberFormat.Int8LE)

basic.showNumber(qsum)
