"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceSize_1 = require("../sport/PriceSize");
class StartingPrices extends JsonMember_1.default {
    constructor(nearPrice = null, farPrice = null, backStakeTaken = [], layLiabilityTaken = [], actualSP = null) {
        super();
        this.nearPrice = nearPrice;
        this.farPrice = farPrice;
        this.backStakeTaken = backStakeTaken;
        this.layLiabilityTaken = layLiabilityTaken;
        this.actualSP = actualSP;
    }
    fromJson(json) {
        if ('nearPrice' in json) {
            this.nearPrice = json.nearPrice;
        }
        if ('farPrice' in json) {
            this.farPrice = json.farPrice;
        }
        if ('backStakeTaken' in json) {
            this.backStakeTaken = json.backStakeTaken.map((backStakeTakenJson) => {
                const element = new PriceSize_1.default();
                element.fromJson(backStakeTakenJson);
                return element;
            });
        }
        if ('layLiabilityTaken' in json) {
            this.layLiabilityTaken = json.layLiabilityTaken.map((layLiabilityTakenJson) => {
                const element = new PriceSize_1.default();
                element.fromJson(layLiabilityTakenJson);
                return element;
            });
        }
        if ('actualSP' in json) {
            this.actualSP = json.actualSP;
        }
    }
    toJson() {
        const json = {};
        if (this.nearPrice !== null) {
            json.nearPrice = this.nearPrice;
        }
        if (this.farPrice !== null) {
            json.farPrice = this.farPrice;
        }
        if (this.backStakeTaken.length > 0) {
            json.backStakeTaken = this.backStakeTaken.map((value) => value.toJson());
        }
        if (this.layLiabilityTaken.length > 0) {
            json.layLiabilityTaken = this.layLiabilityTaken.map((value) => value.toJson());
        }
        if (this.actualSP !== null) {
            json.actualSP = this.actualSP;
        }
        return json;
    }
    isValid() {
        return true;
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
