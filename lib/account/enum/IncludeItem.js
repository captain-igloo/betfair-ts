"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class IncludeItem extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'ALL' &&
                value !== 'EXCHANGE' &&
                value !== 'POKER_ROOM' &&
                value !== 'DEPOSITS_WITHDRAWALS') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
IncludeItem.ALL = 'ALL';
IncludeItem.EXCHANGE = 'EXCHANGE';
IncludeItem.POKER_ROOM = 'POKER_ROOM';
IncludeItem.DEPOSITS_WITHDRAWALS = 'DEPOSITS_WITHDRAWALS';
exports.default = IncludeItem;
