"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceSize_1 = require("../sport/PriceSize");
class ExchangePrices extends JsonMember_1.default {
    constructor(availableToBack = [], availableToLay = [], tradedVolume = []) {
        super();
        this.availableToBack = availableToBack;
        this.availableToLay = availableToLay;
        this.tradedVolume = tradedVolume;
    }
    fromJson(json) {
        if ('availableToBack' in json) {
            this.availableToBack = json.availableToBack.map((availableToBackJson) => {
                const element = new PriceSize_1.default();
                element.fromJson(availableToBackJson);
                return element;
            });
        }
        if ('availableToLay' in json) {
            this.availableToLay = json.availableToLay.map((availableToLayJson) => {
                const element = new PriceSize_1.default();
                element.fromJson(availableToLayJson);
                return element;
            });
        }
        if ('tradedVolume' in json) {
            this.tradedVolume = json.tradedVolume.map((tradedVolumeJson) => {
                const element = new PriceSize_1.default();
                element.fromJson(tradedVolumeJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.availableToBack.length > 0) {
            json.availableToBack = this.availableToBack.map((value) => value.toJson());
        }
        if (this.availableToLay.length > 0) {
            json.availableToLay = this.availableToLay.map((value) => value.toJson());
        }
        if (this.tradedVolume.length > 0) {
            json.tradedVolume = this.tradedVolume.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return true;
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