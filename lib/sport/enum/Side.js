"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class Side extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'BACK' &&
                value !== 'LAY') {
                throw new Error(`Invalid Side: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
Side.BACK = 'BACK';
Side.LAY = 'LAY';
exports.default = Side;
//# sourceMappingURL=Side.js.map