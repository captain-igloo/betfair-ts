"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class BetTargetType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'PAYOUT' &&
                value !== 'BACKERS_PROFIT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
BetTargetType.PAYOUT = 'PAYOUT';
BetTargetType.BACKERS_PROFIT = 'BACKERS_PROFIT';
exports.default = BetTargetType;
