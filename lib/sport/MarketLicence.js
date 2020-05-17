"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketLicence extends JsonMember_1.default {
    constructor(options) {
        super();
        this.wallet = options.wallet;
        this.rules = options.rules;
        this.rulesHasDate = options.rulesHasDate;
        this.clarifications = options.clarifications;
    }
    toJson() {
        const json = {
            wallet: this.wallet,
        };
        if (typeof this.rules !== 'undefined') {
            json.rules = this.rules;
        }
        if (typeof this.rulesHasDate !== 'undefined') {
            json.rulesHasDate = this.rulesHasDate;
        }
        if (typeof this.clarifications !== 'undefined') {
            json.clarifications = this.clarifications;
        }
        return json;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
    getRules() {
        return this.rules;
    }
    setRules(rules) {
        this.rules = rules;
    }
    getRulesHasDate() {
        return this.rulesHasDate;
    }
    setRulesHasDate(rulesHasDate) {
        this.rulesHasDate = rulesHasDate;
    }
    getClarifications() {
        return this.clarifications;
    }
    setClarifications(clarifications) {
        this.clarifications = clarifications;
    }
}
exports.default = MarketLicence;
//# sourceMappingURL=MarketLicence.js.map