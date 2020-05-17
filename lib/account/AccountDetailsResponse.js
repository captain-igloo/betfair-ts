"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class AccountDetailsResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.currencyCode = options.currencyCode;
            this.firstName = options.firstName;
            this.lastName = options.lastName;
            this.localeCode = options.localeCode;
            this.region = options.region;
            this.timezone = options.timezone;
            this.discountRate = options.discountRate;
            this.pointsBalance = options.pointsBalance;
            this.countryCode = options.countryCode;
        }
    }
    toJson() {
        const json = {};
        if (typeof this.currencyCode !== 'undefined') {
            json.currencyCode = this.currencyCode;
        }
        if (typeof this.firstName !== 'undefined') {
            json.firstName = this.firstName;
        }
        if (typeof this.lastName !== 'undefined') {
            json.lastName = this.lastName;
        }
        if (typeof this.localeCode !== 'undefined') {
            json.localeCode = this.localeCode;
        }
        if (typeof this.region !== 'undefined') {
            json.region = this.region;
        }
        if (typeof this.timezone !== 'undefined') {
            json.timezone = this.timezone;
        }
        if (typeof this.discountRate !== 'undefined') {
            json.discountRate = this.discountRate;
        }
        if (typeof this.pointsBalance !== 'undefined') {
            json.pointsBalance = this.pointsBalance;
        }
        if (typeof this.countryCode !== 'undefined') {
            json.countryCode = this.countryCode;
        }
        return json;
    }
    getCurrencyCode() {
        return this.currencyCode;
    }
    setCurrencyCode(currencyCode) {
        this.currencyCode = currencyCode;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getLocaleCode() {
        return this.localeCode;
    }
    setLocaleCode(localeCode) {
        this.localeCode = localeCode;
    }
    getRegion() {
        return this.region;
    }
    setRegion(region) {
        this.region = region;
    }
    getTimezone() {
        return this.timezone;
    }
    setTimezone(timezone) {
        this.timezone = timezone;
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
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(countryCode) {
        this.countryCode = countryCode;
    }
}
exports.default = AccountDetailsResponse;
//# sourceMappingURL=AccountDetailsResponse.js.map