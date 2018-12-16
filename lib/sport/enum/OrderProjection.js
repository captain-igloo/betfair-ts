"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class OrderProjection extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'ALL' && value !== 'EXECUTABLE' && value !== 'EXECUTION_COMPLETE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
OrderProjection.ALL = 'ALL';
OrderProjection.EXECUTABLE = 'EXECUTABLE';
OrderProjection.EXECUTION_COMPLETE = 'EXECUTION_COMPLETE';
exports.default = OrderProjection;
