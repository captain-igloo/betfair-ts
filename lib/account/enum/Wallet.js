"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class Wallet extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'UK' &&
                value !== 'AUSTRALIAN') {
                throw new Error(`Invalid Wallet: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
Wallet.UK = 'UK';
Wallet.AUSTRALIAN = 'AUSTRALIAN';
exports.default = Wallet;
//# sourceMappingURL=Wallet.js.map