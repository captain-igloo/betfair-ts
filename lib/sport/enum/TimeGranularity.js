"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let TimeGranularity = /** @class */ (() => {
    class TimeGranularity extends Enum_1.default {
        constructor(value = '') {
            super();
            this.setValue(value);
        }
        setValue(value) {
            if (value) {
                if (value !== 'DAYS' &&
                    value !== 'HOURS' &&
                    value !== 'MINUTES') {
                    throw new Error(`Invalid TimeGranularity: ${value}`);
                }
                this.value = value;
                this.valid = true;
            }
        }
    }
    TimeGranularity.DAYS = 'DAYS';
    TimeGranularity.HOURS = 'HOURS';
    TimeGranularity.MINUTES = 'MINUTES';
    return TimeGranularity;
})();
exports.default = TimeGranularity;
//# sourceMappingURL=TimeGranularity.js.map