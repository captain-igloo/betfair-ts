"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceSize_1 = require("../sport/PriceSize");
class ExchangePrices extends JsonMember_1.default {
    constructor(options) {
        super();
        if (options.availableToBack) {
            this.availableToBack = this.arrayFromJson(options.availableToBack, PriceSize_1.default);
        }
        if (options.availableToLay) {
            this.availableToLay = this.arrayFromJson(options.availableToLay, PriceSize_1.default);
        }
        if (options.tradedVolume) {
            this.tradedVolume = this.arrayFromJson(options.tradedVolume, PriceSize_1.default);
        }
    }
    toJson() {
        const json = {};
        if (this.availableToBack && this.availableToBack.length > 0) {
            json.availableToBack = this.availableToBack.map((value) => value.toJson());
        }
        if (this.availableToLay && this.availableToLay.length > 0) {
            json.availableToLay = this.availableToLay.map((value) => value.toJson());
        }
        if (this.tradedVolume && this.tradedVolume.length > 0) {
            json.tradedVolume = this.tradedVolume.map((value) => value.toJson());
        }
        return json;
    }
    getAvailableToBack() {
        return this.availableToBack;
    }
    setAvailableToBack(availableToBack) {
        this.availableToBack = availableToBack;
    }
    getAvailableToLay() {
        return this.availableToLay;
    }
    setAvailableToLay(availableToLay) {
        this.availableToLay = availableToLay;
    }
    getTradedVolume() {
        return this.tradedVolume;
    }
    setTradedVolume(tradedVolume) {
        this.tradedVolume = tradedVolume;
    }
}
exports.default = ExchangePrices;
//# sourceMappingURL=ExchangePrices.js.map