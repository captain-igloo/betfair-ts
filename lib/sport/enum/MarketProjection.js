"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class MarketProjection extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'COMPETITION' &&
                value !== 'EVENT' &&
                value !== 'EVENT_TYPE' &&
                value !== 'MARKET_START_TIME' &&
                value !== 'MARKET_DESCRIPTION' &&
                value !== 'RUNNER_DESCRIPTION' &&
                value !== 'RUNNER_METADATA') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
MarketProjection.COMPETITION = 'COMPETITION';
MarketProjection.EVENT = 'EVENT';
MarketProjection.EVENT_TYPE = 'EVENT_TYPE';
MarketProjection.MARKET_START_TIME = 'MARKET_START_TIME';
MarketProjection.MARKET_DESCRIPTION = 'MARKET_DESCRIPTION';
MarketProjection.RUNNER_DESCRIPTION = 'RUNNER_DESCRIPTION';
MarketProjection.RUNNER_METADATA = 'RUNNER_METADATA';
exports.default = MarketProjection;
