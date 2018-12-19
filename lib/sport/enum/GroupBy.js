"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class GroupBy extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'EVENT_TYPE' &&
                value !== 'EVENT' &&
                value !== 'MARKET' &&
                value !== 'RUNNER' &&
                value !== 'SIDE' &&
                value !== 'BET' &&
                value !== 'STRATEGY') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
GroupBy.EVENT_TYPE = 'EVENT_TYPE';
GroupBy.EVENT = 'EVENT';
GroupBy.MARKET = 'MARKET';
GroupBy.RUNNER = 'RUNNER';
GroupBy.SIDE = 'SIDE';
GroupBy.BET = 'BET';
GroupBy.STRATEGY = 'STRATEGY';
exports.default = GroupBy;
