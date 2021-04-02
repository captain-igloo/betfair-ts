"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
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
exports.default = Status;
Status.SUCCESS = 'SUCCESS';
//# sourceMappingURL=Status.js.map