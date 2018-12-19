"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
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
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
TimeGranularity.DAYS = 'DAYS';
TimeGranularity.HOURS = 'HOURS';
TimeGranularity.MINUTES = 'MINUTES';
exports.default = TimeGranularity;
