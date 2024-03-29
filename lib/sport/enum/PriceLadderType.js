"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class PriceLadderType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'CLASSIC' &&
                value !== 'FINEST' &&
                value !== 'LINE_RANGE') {
                throw new Error(`Invalid PriceLadderType: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
PriceLadderType.CLASSIC = 'CLASSIC';
PriceLadderType.FINEST = 'FINEST';
PriceLadderType.LINE_RANGE = 'LINE_RANGE';
exports.default = PriceLadderType;
//# sourceMappingURL=PriceLadderType.js.map