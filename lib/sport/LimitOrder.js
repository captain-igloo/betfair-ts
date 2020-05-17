"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const BetTargetType_1 = require("../sport/enum/BetTargetType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const TimeInForce_1 = require("../sport/enum/TimeInForce");
class LimitOrder extends JsonMember_1.default {
    constructor(options) {
        super();
        this.size = options.size;
        this.price = options.price;
        if (options.persistenceType) {
            this.persistenceType = this.fromJson(options.persistenceType, PersistenceType_1.default);
        }
        if (options.timeInForce) {
            this.timeInForce = this.fromJson(options.timeInForce, TimeInForce_1.default);
        }
        this.minFillSize = options.minFillSize;
        if (options.betTargetType) {
            this.betTargetType = this.fromJson(options.betTargetType, BetTargetType_1.default);
        }
        this.betTargetSize = options.betTargetSize;
    }
    toJson() {
        const json = {
            price: this.price,
        };
        if (typeof this.size !== 'undefined') {
            json.size = this.size;
        }
        if (this.persistenceType) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.timeInForce) {
            json.timeInForce = this.timeInForce.getValue();
        }
        if (typeof this.minFillSize !== 'undefined') {
            json.minFillSize = this.minFillSize;
        }
        if (this.betTargetType) {
            json.betTargetType = this.betTargetType.getValue();
        }
        if (typeof this.betTargetSize !== 'undefined') {
            json.betTargetSize = this.betTargetSize;
        }
        return json;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getPersistenceType() {
        return this.persistenceType;
    }
    setPersistenceType(persistenceType) {
        this.persistenceType = persistenceType;
    }
    getTimeInForce() {
        return this.timeInForce;
    }
    setTimeInForce(timeInForce) {
        this.timeInForce = timeInForce;
    }
    getMinFillSize() {
        return this.minFillSize;
    }
    setMinFillSize(minFillSize) {
        this.minFillSize = minFillSize;
    }
    getBetTargetType() {
        return this.betTargetType;
    }
    setBetTargetType(betTargetType) {
        this.betTargetType = betTargetType;
    }
    getBetTargetSize() {
        return this.betTargetSize;
    }
    setBetTargetSize(betTargetSize) {
        this.betTargetSize = betTargetSize;
    }
}
exports.default = LimitOrder;
//# sourceMappingURL=LimitOrder.js.map