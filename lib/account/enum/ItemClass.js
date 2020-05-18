"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let ItemClass = /** @class */ (() => {
    class ItemClass extends Enum_1.default {
        constructor(value = '') {
            super();
            this.setValue(value);
        }
        setValue(value) {
            if (value) {
                if (value !== 'UNKNOWN') {
                    throw new Error(`Invalid ItemClass: ${value}`);
                }
                this.value = value;
                this.valid = true;
            }
        }
    }
    ItemClass.UNKNOWN = 'UNKNOWN';
    return ItemClass;
})();
exports.default = ItemClass;
//# sourceMappingURL=ItemClass.js.map