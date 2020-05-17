"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class RunnerId extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
    }
    toJson() {
        const json = {
            marketId: this.marketId,
            selectionId: this.selectionId,
        };
        if (typeof this.handicap !== 'undefined') {
            json.handicap = this.handicap;
        }
        return json;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getHandicap() {
        return this.handicap;
    }
    setHandicap(handicap) {
        this.handicap = handicap;
    }
}
exports.default = RunnerId;
//# sourceMappingURL=RunnerId.js.map