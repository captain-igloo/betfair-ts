"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const BetTargetType_1 = require("../sport/enum/BetTargetType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const TimeInForce_1 = require("../sport/enum/TimeInForce");
class LimitOrder extends JsonMember_1.default {
    constructor(size = null, price = null, persistenceType = new PersistenceType_1.default(), timeInForce = new TimeInForce_1.default(), minFillSize = null, betTargetType = new BetTargetType_1.default(), betTargetSize = null) {
        super();
        this.size = size;
        this.price = price;
        this.persistenceType = persistenceType;
        this.timeInForce = timeInForce;
        this.minFillSize = minFillSize;
        this.betTargetType = betTargetType;
        this.betTargetSize = betTargetSize;
    }
    fromJson(json) {
        if ('size' in json) {
            this.size = json.size;
        }
        if ('price' in json) {
            this.price = json.price;
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('timeInForce' in json) {
            this.timeInForce.setValue(json.timeInForce);
        }
        if ('minFillSize' in json) {
            this.minFillSize = json.minFillSize;
        }
        if ('betTargetType' in json) {
            this.betTargetType.setValue(json.betTargetType);
        }
        if ('betTargetSize' in json) {
            this.betTargetSize = json.betTargetSize;
        }
    }
    toJson() {
        const json = {};
        if (this.size !== null) {
            json.size = this.size;
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.timeInForce.isValid()) {
            json.timeInForce = this.timeInForce.getValue();
        }
        if (this.minFillSize !== null) {
            json.minFillSize = this.minFillSize;
        }
        if (this.betTargetType.isValid()) {
            json.betTargetType = this.betTargetType.getValue();
        }
        if (this.betTargetSize !== null) {
            json.betTargetSize = this.betTargetSize;
        }
        return json;
    }
    isValid() {
        return this.price !== null;
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