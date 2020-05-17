"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class ReplaceInstruction extends JsonMember_1.default {
    constructor(options) {
        super();
        this.betId = options.betId;
        this.newPrice = options.newPrice;
    }
    toJson() {
        const json = {
            betId: this.betId,
            newPrice: this.newPrice,
        };
        return json;
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
//# sourceMappingURL=ReplaceInstruction.js.map