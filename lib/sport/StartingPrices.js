"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceSize_1 = require("../sport/PriceSize");
class StartingPrices extends JsonMember_1.default {
    constructor(options) {
        super();
        this.nearPrice = options.nearPrice;
        this.farPrice = options.farPrice;
        if (options.backStakeTaken) {
            this.backStakeTaken = this.arrayFromJson(options.backStakeTaken, PriceSize_1.default);
        }
        if (options.layLiabilityTaken) {
            this.layLiabilityTaken = this.arrayFromJson(options.layLiabilityTaken, PriceSize_1.default);
        }
        this.actualSP = options.actualSP;
    }
    toJson() {
        const json = {};
        if (typeof this.nearPrice !== 'undefined') {
            json.nearPrice = this.nearPrice;
        }
        if (typeof this.farPrice !== 'undefined') {
            json.farPrice = this.farPrice;
        }
        if (this.backStakeTaken && this.backStakeTaken.length > 0) {
            json.backStakeTaken = this.backStakeTaken.map((value) => value.toJson());
        }
        if (this.layLiabilityTaken && this.layLiabilityTaken.length > 0) {
            json.layLiabilityTaken = this.layLiabilityTaken.map((value) => value.toJson());
        }
        if (typeof this.actualSP !== 'undefined') {
            json.actualSP = this.actualSP;
        }
        return json;
    }
    getNearPrice() {
        return this.nearPrice;
    }
    setNearPrice(nearPrice) {
        this.nearPrice = nearPrice;
    }
    getFarPrice() {
        return this.farPrice;
    }
    setFarPrice(farPrice) {
        this.farPrice = farPrice;
    }
    getBackStakeTaken() {
        return this.backStakeTaken;
    }
    setBackStakeTaken(backStakeTaken) {
        this.backStakeTaken = backStakeTaken;
    }
    getLayLiabilityTaken() {
        return this.layLiabilityTaken;
    }
    setLayLiabilityTaken(layLiabilityTaken) {
        this.layLiabilityTaken = layLiabilityTaken;
    }
    getActualSP() {
        return this.actualSP;
    }
    setActualSP(actualSP) {
        this.actualSP = actualSP;
    }
}
exports.default = StartingPrices;
//# sourceMappingURL=StartingPrices.js.map