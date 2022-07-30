/// <reference path=".config/vc.d.ts" />

class CheatCode {
    constructor(code) {
        this.code = code;
    }

    run() {
        this.code.toUpperCase().split('').forEach((key) => {
            this.pressKey(key.charCodeAt(0));
        });        
    }

    pressKey(key) {
        Pad.HoldKey(key);
        wait(0);
        Pad.ReleaseKey(key);
        wait(0);
    }
}

export { CheatCode }