"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class MarketStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'INACTIVE' &&
                value !== 'OPEN' &&
                value !== 'SUSPENDED' &&
                value !== 'CLOSED') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = MarketStatus;
MarketStatus.INACTIVE = 'INACTIVE';
MarketStatus.OPEN = 'OPEN';
MarketStatus.SUSPENDED = 'SUSPENDED';
MarketStatus.CLOSED = 'CLOSED';
//# sourceMappingURL=MarketStatus.js.map