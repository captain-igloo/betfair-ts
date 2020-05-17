"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const Wallet_1 = require("../account/enum/Wallet");
class TransferFundsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.from = this.fromJson(options.from, Wallet_1.default);
        this.to = this.fromJson(options.to, Wallet_1.default);
        this.amount = options.amount;
    }
    toJson() {
        const json = {
            from: this.from.getValue(),
            to: this.to.getValue(),
            amount: this.amount,
        };
        return json;
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
//# sourceMappingURL=TransferFundsRequest.js.map