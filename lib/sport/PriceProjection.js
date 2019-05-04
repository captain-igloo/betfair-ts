"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const ExBestOffersOverrides_1 = require("../sport/ExBestOffersOverrides");
class PriceProjection extends JsonMember_1.default {
    constructor(priceData = new Set(), exBestOffersOverrides = new ExBestOffersOverrides_1.default(), virtualise = null, rolloverStakes = null) {
        super();
        this.priceData = priceData;
        this.exBestOffersOverrides = exBestOffersOverrides;
        this.virtualise = virtualise;
        this.rolloverStakes = rolloverStakes;
    }
    fromJson(json) {
        if ('priceData' in json) {
            this.priceData = json.priceData;
        }
        if ('exBestOffersOverrides' in json) {
            this.exBestOffersOverrides.fromJson(json.exBestOffersOverrides);
        }
        if ('virtualise' in json) {
            this.virtualise = json.virtualise;
        }
        if ('rolloverStakes' in json) {
            this.rolloverStakes = json.rolloverStakes;
        }
    }
    toJson() {
        const json = {};
        if (this.priceData.size > 0) {
            json.priceData = [];
            this.priceData.forEach((element) => {
                json.priceData.push(element.getValue());
            });
        }
        if (this.exBestOffersOverrides.isValid()) {
            json.exBestOffersOverrides = this.exBestOffersOverrides.toJson();
        }
        if (this.virtualise !== null) {
            json.virtualise = this.virtualise;
        }
        if (this.rolloverStakes !== null) {
            json.rolloverStakes = this.rolloverStakes;
        }
        return json;
    }
    isValid() {
        return true;
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