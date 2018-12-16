"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class PriceData extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'SP_AVAILABLE' && value !== 'SP_TRADED' && value !== 'EX_BEST_OFFERS' && value !== 'EX_ALL_OFFERS' && value !== 'EX_TRADED') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
PriceData.SP_AVAILABLE = 'SP_AVAILABLE';
PriceData.SP_TRADED = 'SP_TRADED';
PriceData.EX_BEST_OFFERS = 'EX_BEST_OFFERS';
PriceData.EX_ALL_OFFERS = 'EX_ALL_OFFERS';
PriceData.EX_TRADED = 'EX_TRADED';
exports.default = PriceData;
