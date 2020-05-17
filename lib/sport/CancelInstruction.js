"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class CancelInstruction extends JsonMember_1.default {
    constructor(options) {
        super();
        this.betId = options.betId;
        this.sizeReduction = options.sizeReduction;
    }
    toJson() {
        const json = {
            betId: this.betId,
        };
        if (typeof this.sizeReduction !== 'undefined') {
            json.sizeReduction = this.sizeReduction;
        }
        return json;
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