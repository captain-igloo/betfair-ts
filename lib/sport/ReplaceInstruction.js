"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class ReplaceInstruction extends JsonMember_1.default {
    constructor(betId = '', newPrice = null) {
        super();
        this.betId = betId;
        this.newPrice = newPrice;
    }
    fromJson(json) {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('newPrice' in json) {
            this.newPrice = json.newPrice;
        }
    }
    toJson() {
        const json = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.newPrice !== null) {
            json.newPrice = this.newPrice;
        }
        return json;
    }
    isValid() {
        return this.betId !== null &&
            this.newPrice !== null;
    }
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getNewPrice() {
        return this.newPrice;
    }
    setNewPrice(newPrice) {
        this.newPrice = newPrice;
    }
}
exports.default = ReplaceInstruction;
