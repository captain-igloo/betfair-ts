"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class PriceSize extends JsonMember_1.default {
    constructor(price = null, size = null) {
        super();
        this.price = price;
        this.size = size;
    }
    fromJson(json) {
        if ('price' in json) {
            this.price = json.price;
        }
        if ('size' in json) {
            this.size = json.size;
        }
    }
    toJson() {
        const json = {};
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.size !== null) {
            json.size = this.size;
        }
        return json;
    }
    isValid() {
        return this.price !== null &&
            this.size !== null;
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