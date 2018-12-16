"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class LimitOnCloseOrder extends JsonMember_1.default {
    constructor(liability = null, price = null) {
        super();
        this.liability = liability;
        this.price = price;
    }
    fromJson(json) {
        if ('liability' in json) {
            this.liability = json.liability;
        }
        if ('price' in json) {
            this.price = json.price;
        }
    }
    toJson() {
        const json = {};
        if (this.liability !== null) {
            json.liability = this.liability;
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        return json;
    }
    isValid() {
        return this.liability !== null &&
            this.price !== null;
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
