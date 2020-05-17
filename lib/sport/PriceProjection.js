"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceData_1 = require("../sport/enum/PriceData");
const ExBestOffersOverrides_1 = require("../sport/ExBestOffersOverrides");
class PriceProjection extends JsonMember_1.default {
    constructor(options) {
        super();
        this.priceData = options.priceData && this.setFromJson(options.priceData, PriceData_1.default);
        this.exBestOffersOverrides = options.exBestOffersOverrides && this.fromJson(options.exBestOffersOverrides, ExBestOffersOverrides_1.default);
        this.virtualise = options.virtualise;
        this.rolloverStakes = options.rolloverStakes;
    }
    toJson() {
        const json = {};
        if (this.priceData && this.priceData.size > 0) {
            json.priceData = this.setToJson(this.priceData);
        }
        if (this.exBestOffersOverrides) {
            json.exBestOffersOverrides = this.exBestOffersOverrides.toJson();
        }
        if (typeof this.virtualise !== 'undefined') {
            json.virtualise = this.virtualise;
        }
        if (typeof this.rolloverStakes !== 'undefined') {
            json.rolloverStakes = this.rolloverStakes;
        }
        return json;
    }
    getPriceData() {
        return this.priceData;
    }
    setPriceData(priceData) {
        this.priceData = priceData;
    }
    getExBestOffersOverrides() {
        return this.exBestOffersOverrides;
    }
    setExBestOffersOverrides(exBestOffersOverrides) {
        this.exBestOffersOverrides = exBestOffersOverrides;
    }
    getVirtualise() {
        return this.virtualise;
    }
    setVirtualise(virtualise) {
        this.virtualise = virtualise;
    }
    getRolloverStakes() {
        return this.rolloverStakes;
    }
    setRolloverStakes(rolloverStakes) {
        this.rolloverStakes = rolloverStakes;
    }
}
exports.default = PriceProjection;
//# sourceMappingURL=PriceProjection.js.map