"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class OrderStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'PENDING' &&
                value !== 'EXECUTION_COMPLETE' &&
                value !== 'EXECUTABLE' &&
                value !== 'EXPIRED') {
                throw new Error(`Invalid OrderStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
OrderStatus.PENDING = 'PENDING';
OrderStatus.EXECUTION_COMPLETE = 'EXECUTION_COMPLETE';
OrderStatus.EXECUTABLE = 'EXECUTABLE';
OrderStatus.EXPIRED = 'EXPIRED';
exports.default = OrderStatus;
//# sourceMappingURL=OrderStatus.js.map