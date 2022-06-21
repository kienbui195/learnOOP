class Mobile {

    constructor(pin,text,inbox,mailed,status) {
        this._pin = pin;
        this._text = text;
        this._inbox = inbox;
        this._mailed = mailed;
        this._status = status;
    }

    checkPin(pin) {
        if (pin > 20) {
            document.write('<br>' + pin + '%');
            this._status = true;
            return this._status;
        } else if (pin > 1 && pin <= 20) {
            document.write('<br>' + 'Pin yeu, vui long cam bo sac');
            this._status = true;
            return this._status;
        } else {
            this._status = false;
            return this._status;
        }

    }

    checkStatus() {
        return this._status;

    }

    chargerBattery() {
        if (this._pin === 100) {
            document.write('Pin da duoc sac day!');
        } else {
            document.write('Super Quick Charger 120W -- charging...');
            do {
                this._pin++;
                document.write('<br/>' + ' Charging ' + this._pin + '%...');
            } while (this._pin < 100);
            document.write('Pin da duoc sac day!');
        }
    }

    turnOnOrOff(text) {
        if (text === 'on')
            return this._status = true;
        else if (text === 'off')
            return this._status = false;
    }

    typeNewMess(text) {
        if (this.checkPin(this._pin)) {
            this._text.push(text);
            this._pin--;
        }
    }

    receiveMess(mobile2) {
        if (this.checkPin(this._pin)) {
            let mess = mobile2._text.pop();
            mobile2._mailed.push(mess);
            this._inbox.push(mess);
            this._pin--;
        }
    }

    sentMess(mobile2) {
        if (this.checkPin(this._pin)) {
            let mess = mobile2._text.pop();
            this._mailed.push(mess);
            mobile2._inbox.push(mess);
            this._pin--;
        }
    }


}