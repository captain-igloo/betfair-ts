"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class SortDir extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'EARLIEST_TO_LATEST' &&
                value !== 'LATEST_TO_EARLIEST') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
SortDir.EARLIEST_TO_LATEST = 'EARLIEST_TO_LATEST';
SortDir.LATEST_TO_EARLIEST = 'LATEST_TO_EARLIEST';
exports.default = SortDir;
//# sourceMappingURL=SortDir.js.map