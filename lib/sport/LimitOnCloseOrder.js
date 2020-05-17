"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class LimitOnCloseOrder extends JsonMember_1.default {
    constructor(options) {
        super();
        this.liability = options.liability;
        this.price = options.price;
    }
    toJson() {
        const json = {
            liability: this.liability,
            price: this.price,
        };
        return json;
    }
    getLiability() {
        return this.liability;
    }
    setLiability(liability) {
        this.liability = liability;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}
exports.default = LimitOnCloseOrder;
//# sourceMappingURL=LimitOnCloseOrder.js.map