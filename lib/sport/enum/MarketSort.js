"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let MarketSort = /** @class */ (() => {
    class MarketSort extends Enum_1.default {
        constructor(value = '') {
            super();
            this.setValue(value);
        }
        setValue(value) {
            if (value) {
                if (value !== 'MINIMUM_TRADED' &&
                    value !== 'MAXIMUM_TRADED' &&
                    value !== 'MINIMUM_AVAILABLE' &&
                    value !== 'MAXIMUM_AVAILABLE' &&
                    value !== 'FIRST_TO_START' &&
                    value !== 'LAST_TO_START') {
                    throw new Error(`Invalid MarketSort: ${value}`);
                }
                this.value = value;
                this.valid = true;
            }
        }
    }
    MarketSort.MINIMUM_TRADED = 'MINIMUM_TRADED';
    MarketSort.MAXIMUM_TRADED = 'MAXIMUM_TRADED';
    MarketSort.MINIMUM_AVAILABLE = 'MINIMUM_AVAILABLE';
    MarketSort.MAXIMUM_AVAILABLE = 'MAXIMUM_AVAILABLE';
    MarketSort.FIRST_TO_START = 'FIRST_TO_START';
    MarketSort.LAST_TO_START = 'LAST_TO_START';
    return MarketSort;
})();
exports.default = MarketSort;
//# sourceMappingURL=MarketSort.js.map