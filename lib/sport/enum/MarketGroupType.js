"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class MarketGroupType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'EVENT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
MarketGroupType.EVENT = 'EVENT';
exports.default = MarketGroupType;
//# sourceMappingURL=MarketGroupType.js.map