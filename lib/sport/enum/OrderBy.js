"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class OrderBy extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'BY_BET' &&
                value !== 'BY_MARKET' &&
                value !== 'BY_PLACE_TIME' &&
                value !== 'BY_MATCH_TIME' &&
                value !== 'BY_VOID_TIME' &&
                value !== 'BY_SETTLED_TIME') {
                throw new Error(`Invalid OrderBy: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = OrderBy;
OrderBy.BY_BET = 'BY_BET';
OrderBy.BY_MARKET = 'BY_MARKET';
OrderBy.BY_PLACE_TIME = 'BY_PLACE_TIME';
OrderBy.BY_MATCH_TIME = 'BY_MATCH_TIME';
OrderBy.BY_VOID_TIME = 'BY_VOID_TIME';
OrderBy.BY_SETTLED_TIME = 'BY_SETTLED_TIME';
//# sourceMappingURL=OrderBy.js.map