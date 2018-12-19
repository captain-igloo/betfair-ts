"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class MarketBettingType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'ODDS' &&
                value !== 'LINE' &&
                value !== 'RANGE' &&
                value !== 'ASIAN_HANDICAP_DOUBLE_LINE' &&
                value !== 'ASIAN_HANDICAP_SINGLE_LINE' &&
                value !== 'FIXED_ODDS') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
MarketBettingType.ODDS = 'ODDS';
MarketBettingType.LINE = 'LINE';
MarketBettingType.RANGE = 'RANGE';
MarketBettingType.ASIAN_HANDICAP_DOUBLE_LINE = 'ASIAN_HANDICAP_DOUBLE_LINE';
MarketBettingType.ASIAN_HANDICAP_SINGLE_LINE = 'ASIAN_HANDICAP_SINGLE_LINE';
MarketBettingType.FIXED_ODDS = 'FIXED_ODDS';
exports.default = MarketBettingType;
