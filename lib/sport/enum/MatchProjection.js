"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let MatchProjection = /** @class */ (() => {
    class MatchProjection extends Enum_1.default {
        constructor(value = '') {
            super();
            this.setValue(value);
        }
        setValue(value) {
            if (value) {
                if (value !== 'NO_ROLLUP' &&
                    value !== 'ROLLED_UP_BY_PRICE' &&
                    value !== 'ROLLED_UP_BY_AVG_PRICE') {
                    throw new Error(`Invalid MatchProjection: ${value}`);
                }
                this.value = value;
                this.valid = true;
            }
        }
    }
    MatchProjection.NO_ROLLUP = 'NO_ROLLUP';
    MatchProjection.ROLLED_UP_BY_PRICE = 'ROLLED_UP_BY_PRICE';
    MatchProjection.ROLLED_UP_BY_AVG_PRICE = 'ROLLED_UP_BY_AVG_PRICE';
    return MatchProjection;
})();
exports.default = MatchProjection;
//# sourceMappingURL=MatchProjection.js.map