"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketOnCloseOrder extends JsonMember_1.default {
    constructor(liability = null) {
        super();
        this.liability = liability;
    }
    fromJson(json) {
        if ('liability' in json) {
            this.liability = json.liability;
        }
    }
    toJson() {
        const json = {};
        if (this.liability !== null) {
            json.liability = this.liability;
        }
        return json;
    }
    isValid() {
        return this.liability !== null;
    }
    getLiability() {
        return this.liability;
    }
    setLiability(liability) {
        this.liability = liability;
    }
}
exports.default = MarketOnCloseOrder;
//# sourceMappingURL=MarketOnCloseOrder.js.map