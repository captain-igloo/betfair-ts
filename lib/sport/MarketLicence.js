"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketLicence extends JsonMember_1.default {
    constructor(wallet = '', rules = '', rulesHasDate = null, clarifications = '') {
        super();
        this.wallet = wallet;
        this.rules = rules;
        this.rulesHasDate = rulesHasDate;
        this.clarifications = clarifications;
    }
    fromJson(json) {
        if ('wallet' in json) {
            this.wallet = json.wallet;
        }
        if ('rules' in json) {
            this.rules = json.rules;
        }
        if ('rulesHasDate' in json) {
            this.rulesHasDate = json.rulesHasDate;
        }
        if ('clarifications' in json) {
            this.clarifications = json.clarifications;
        }
    }
    toJson() {
        const json = {};
        if (this.wallet !== null) {
            json.wallet = this.wallet;
        }
        if (this.rules !== null) {
            json.rules = this.rules;
        }
        if (this.rulesHasDate !== null) {
            json.rulesHasDate = this.rulesHasDate;
        }
        if (this.clarifications !== null) {
            json.clarifications = this.clarifications;
        }
        return json;
    }
    isValid() {
        return this.wallet !== null;
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