"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let Status = /** @class */ (() => {
    class Status extends Enum_1.default {
        constructor(value = '') {
            super();
            this.setValue(value);
        }
        setValue(value) {
            if (value) {
                if (value !== 'SUCCESS') {
                    throw new Error(`Invalid Status: ${value}`);
                }
                this.value = value;
                this.valid = true;
            }
        }
    }
    Status.SUCCESS = 'SUCCESS';
    return Status;
})();
exports.default = Status;
//# sourceMappingURL=Status.js.map