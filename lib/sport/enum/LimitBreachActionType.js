"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class LimitBreachActionType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'REJECT_BETS' && value !== 'STOP_BETTING' && value !== 'TEAR_DOWN_MARKET_GROUP') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
LimitBreachActionType.REJECT_BETS = 'REJECT_BETS';
LimitBreachActionType.STOP_BETTING = 'STOP_BETTING';
LimitBreachActionType.TEAR_DOWN_MARKET_GROUP = 'TEAR_DOWN_MARKET_GROUP';
exports.default = LimitBreachActionType;
