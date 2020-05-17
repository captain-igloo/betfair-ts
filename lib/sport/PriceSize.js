"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class PriceSize extends JsonMember_1.default {
    constructor(options) {
        super();
        this.price = options.price;
        this.size = options.size;
    }
    toJson() {
        const json = {
            price: this.price,
            size: this.size,
        };
        return json;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
}
exports.default = PriceSize;
//# sourceMappingURL=PriceSize.js.map