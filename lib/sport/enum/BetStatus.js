"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class BetStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'SETTLED' &&
                value !== 'VOIDED' &&
                value !== 'LAPSED' &&
                value !== 'CANCELLED') {
                throw new Error(`Invalid BetStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
BetStatus.SETTLED = 'SETTLED';
BetStatus.VOIDED = 'VOIDED';
BetStatus.LAPSED = 'LAPSED';
BetStatus.CANCELLED = 'CANCELLED';
exports.default = BetStatus;
//# sourceMappingURL=BetStatus.js.map