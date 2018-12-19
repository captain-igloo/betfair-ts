"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Wallet_1 = require("../account/enum/Wallet");
const JsonRequest_1 = require("../JsonRequest");
class GetAccountFundsRequest extends JsonRequest_1.default {
    constructor(wallet = new Wallet_1.default()) {
        super();
        this.wallet = wallet;
    }
    fromJson(json) {
        if ('wallet' in json) {
            this.wallet.setValue(json.wallet);
        }
    }
    toJson() {
        const json = {};
        if (this.wallet.isValid()) {
            json.wallet = this.wallet;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
}
exports.default = GetAccountFundsRequest;
