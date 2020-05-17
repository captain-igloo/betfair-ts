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
                throw new Error(`Invalid MarketGroupType: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = MarketGroupType;
MarketGroupType.EVENT = 'EVENT';
//# sourceMappingURL=MarketGroupType.js.map