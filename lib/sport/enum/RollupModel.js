"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class RollupModel extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'STAKE' &&
                value !== 'PAYOUT' &&
                value !== 'MANAGED_LIABILITY' &&
                value !== 'NONE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
RollupModel.STAKE = 'STAKE';
RollupModel.PAYOUT = 'PAYOUT';
RollupModel.MANAGED_LIABILITY = 'MANAGED_LIABILITY';
RollupModel.NONE = 'NONE';
exports.default = RollupModel;
