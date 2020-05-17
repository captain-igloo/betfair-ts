"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const Wallet_1 = require("../account/enum/Wallet");
class GetAccountFundsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        if (options.wallet) {
            this.wallet = this.fromJson(options.wallet, Wallet_1.default);
        }
    }
    toJson() {
        const json = {};
        if (this.wallet) {
            json.wallet = this.wallet.getValue();
        }
        return json;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
}
exports.default = GetAccountFundsRequest;
//# sourceMappingURL=GetAccountFundsRequest.js.map