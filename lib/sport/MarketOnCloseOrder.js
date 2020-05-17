"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketOnCloseOrder extends JsonMember_1.default {
    constructor(options) {
        super();
        this.liability = options.liability;
    }
    toJson() {
        const json = {
            liability: this.liability,
        };
        return json;
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