"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class PersistenceType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'LAPSE' &&
                value !== 'PERSIST' &&
                value !== 'MARKET_ON_CLOSE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
PersistenceType.LAPSE = 'LAPSE';
PersistenceType.PERSIST = 'PERSIST';
PersistenceType.MARKET_ON_CLOSE = 'MARKET_ON_CLOSE';
exports.default = PersistenceType;
