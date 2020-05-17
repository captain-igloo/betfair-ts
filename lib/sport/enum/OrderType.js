"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class OrderType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'LIMIT' &&
                value !== 'LIMIT_ON_CLOSE' &&
                value !== 'MARKET_ON_CLOSE') {
                throw new Error(`Invalid OrderType: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = OrderType;
OrderType.LIMIT = 'LIMIT';
OrderType.LIMIT_ON_CLOSE = 'LIMIT_ON_CLOSE';
OrderType.MARKET_ON_CLOSE = 'MARKET_ON_CLOSE';
//# sourceMappingURL=OrderType.js.map