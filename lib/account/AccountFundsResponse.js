"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class AccountFundsResponse extends JsonResponse_1.default {
    constructor(availableToBetBalance = null, exposure = null, retainedCommission = null, exposureLimit = null, discountRate = null, pointsBalance = null, wallet = '') {
        super();
        this.availableToBetBalance = availableToBetBalance;
        this.exposure = exposure;
        this.retainedCommission = retainedCommission;
        this.exposureLimit = exposureLimit;
        this.discountRate = discountRate;
        this.pointsBalance = pointsBalance;
        this.wallet = wallet;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('availableToBetBalance' in json) {
                this.availableToBetBalance = json.availableToBetBalance;
            }
            if ('exposure' in json) {
                this.exposure = json.exposure;
            }
            if ('retainedCommission' in json) {
                this.retainedCommission = json.retainedCommission;
            }
            if ('exposureLimit' in json) {
                this.exposureLimit = json.exposureLimit;
            }
            if ('discountRate' in json) {
                this.discountRate = json.discountRate;
            }
            if ('pointsBalance' in json) {
                this.pointsBalance = json.pointsBalance;
            }
            if ('wallet' in json) {
                this.wallet = json.wallet;
            }
        }
    }
    toJson() {
        const json = {};
        if (this.availableToBetBalance !== null) {
            json.availableToBetBalance = this.availableToBetBalance;
        }
        if (this.exposure !== null) {
            json.exposure = this.exposure;
        }
        if (this.retainedCommission !== null) {
            json.retainedCommission = this.retainedCommission;
        }
        if (this.exposureLimit !== null) {
            json.exposureLimit = this.exposureLimit;
        }
        if (this.discountRate !== null) {
            json.discountRate = this.discountRate;
        }
        if (this.pointsBalance !== null) {
            json.pointsBalance = this.pointsBalance;
        }
        if (this.wallet !== null) {
            json.wallet = this.wallet;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getAvailableToBetBalance() {
        return this.availableToBetBalance;
    }
    setAvailableToBetBalance(availableToBetBalance) {
        this.availableToBetBalance = availableToBetBalance;
    }
    getExposure() {
        return this.exposure;
    }
    setExposure(exposure) {
        this.exposure = exposure;
    }
    getRetainedCommission() {
        return this.retainedCommission;
    }
    setRetainedCommission(retainedCommission) {
        this.retainedCommission = retainedCommission;
    }
    getExposureLimit() {
        return this.exposureLimit;
    }
    setExposureLimit(exposureLimit) {
        this.exposureLimit = exposureLimit;
    }
    getDiscountRate() {
        return this.discountRate;
    }
    setDiscountRate(discountRate) {
        this.discountRate = discountRate;
    }
    getPointsBalance() {
        return this.pointsBalance;
    }
    setPointsBalance(pointsBalance) {
        this.pointsBalance = pointsBalance;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
}
exports.default = AccountFundsResponse;
