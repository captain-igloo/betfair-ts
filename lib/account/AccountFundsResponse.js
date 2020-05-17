"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class AccountFundsResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.availableToBetBalance = options.availableToBetBalance;
            this.exposure = options.exposure;
            this.retainedCommission = options.retainedCommission;
            this.exposureLimit = options.exposureLimit;
            this.discountRate = options.discountRate;
            this.pointsBalance = options.pointsBalance;
            this.wallet = options.wallet;
        }
    }
    toJson() {
        const json = {};
        if (typeof this.availableToBetBalance !== 'undefined') {
            json.availableToBetBalance = this.availableToBetBalance;
        }
        if (typeof this.exposure !== 'undefined') {
            json.exposure = this.exposure;
        }
        if (typeof this.retainedCommission !== 'undefined') {
            json.retainedCommission = this.retainedCommission;
        }
        if (typeof this.exposureLimit !== 'undefined') {
            json.exposureLimit = this.exposureLimit;
        }
        if (typeof this.discountRate !== 'undefined') {
            json.discountRate = this.discountRate;
        }
        if (typeof this.pointsBalance !== 'undefined') {
            json.pointsBalance = this.pointsBalance;
        }
        if (typeof this.wallet !== 'undefined') {
            json.wallet = this.wallet;
        }
        return json;
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
//# sourceMappingURL=AccountFundsResponse.js.map