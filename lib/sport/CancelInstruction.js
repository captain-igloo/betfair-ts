"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class CancelInstruction extends JsonMember_1.default {
    constructor(betId = '', sizeReduction = null) {
        super();
        this.betId = betId;
        this.sizeReduction = sizeReduction;
    }
    fromJson(json) {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('sizeReduction' in json) {
            this.sizeReduction = json.sizeReduction;
        }
    }
    toJson() {
        const json = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.sizeReduction !== null) {
            json.sizeReduction = this.sizeReduction;
        }
        return json;
    }
    isValid() {
        return this.betId !== null;
    }
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getSizeReduction() {
        return this.sizeReduction;
    }
    setSizeReduction(sizeReduction) {
        this.sizeReduction = sizeReduction;
    }
}
exports.default = CancelInstruction;
//# sourceMappingURL=CancelInstruction.js.map