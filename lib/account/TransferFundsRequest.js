"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const Wallet_1 = require("../account/enum/Wallet");
class TransferFundsRequest extends JsonRequest_1.default {
    constructor(from = new Wallet_1.default(), to = new Wallet_1.default(), amount = null) {
        super();
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
    fromJson(json) {
        if ('from' in json) {
            this.from.setValue(json.from);
        }
        if ('to' in json) {
            this.to.setValue(json.to);
        }
        if ('amount' in json) {
            this.amount = json.amount;
        }
    }
    toJson() {
        const json = {};
        if (this.from.isValid()) {
            json.from = this.from;
        }
        if (this.to.isValid()) {
            json.to = this.to;
        }
        if (this.amount !== null) {
            json.amount = this.amount;
        }
        return json;
    }
    isValid() {
        return this.from.isValid() &&
            this.to.isValid() &&
            this.amount !== null;
    }
    getFrom() {
        return this.from;
    }
    setFrom(from) {
        this.from = from;
    }
    getTo() {
        return this.to;
    }
    setTo(to) {
        this.to = to;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
}
exports.default = TransferFundsRequest;
